import AccountPhoto from "../../../AccountPhoto/AccountPhoto";
import "./ChatListItem.scss";
import moment from "moment";
import { MessagesContext } from "../../../../App";
import { useContext, useEffect } from "react";
import { lastMsgContact } from "../../../../helpers/chatHelpers";
import { playNotification } from "../../../../helpers/playNotification";

function ChatListItem({ contact, onClick, selected }) {
  const { messages } = useContext(MessagesContext);

  const notSeenMsg = messages
    .filter((message) => message.contact === contact.id)
    .filter((msg) => msg.isSeen === false).length;
  useEffect(() => {
    if (notSeenMsg > 0) {
      playNotification();
    }
  }, [notSeenMsg]);

  const lastContactMsg = lastMsgContact(contact, messages);

  return (
    <div className={`chat-list-item ${selected ? "chat-list-item--selected" : ""}`} onClick={onClick}>
      <div className="chat-list-item__photo">
        <AccountPhoto src={contact.avatar} online={contact.online} />
      </div>
      <div className="chat-list-item__msg-info">
        <div className="chat-list-item__title-from">{contact.name}</div>
        <div className="chat-list-item__preview_msg">
          {lastContactMsg ? (
            lastContactMsg?.text
          ) : (
            <div className="chat-list-item__start-chat-placeholder">Press to start a chat</div>
          )}
        </div>
      </div>
      <div className="chat-list-item__info-wrap">
        <div className="chat-list-item__date">
          {lastContactMsg ? moment(lastContactMsg?.date).format("MMM DD, YYYY") : ""}
        </div>
        <div className="chat-list-item__notifications">
          {notSeenMsg > 0 && <div className="chat-list-item__notifications-dot">{notSeenMsg}</div>}
        </div>
      </div>
    </div>
  );
}
export default ChatListItem;
