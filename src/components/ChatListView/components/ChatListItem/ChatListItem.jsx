import AccountPhoto from "../../../AccountPhoto/AccountPhoto";
import "./ChatListItem.scss";
import moment from "moment";
import { MessagesContext } from "../../../../App";
import { useContext, useEffect } from "react";
import { lastMsgContact } from "../../../../helpers/chatHelpers";

function ChatListItem({ contact, onClick, selected }) {
  const { messages } = useContext(MessagesContext);

  const notSeenMsg = messages
    .filter((message) => message.contact === contact.id)
    .filter((msg) => msg.isSeen === false).length;
  useEffect(() => {
    if (notSeenMsg > 0) {
      const audio = new Audio("/audio/notification.mp3");
      audio.addEventListener("canplaythrough", (event) => {
        audio.play();
      });
    }
  }, [notSeenMsg]);

  return (
    <div className={`chat-list-item ${selected ? "chat-list-item--selected" : ""}`} onClick={onClick}>
      <div className="chat-list-item__photo">
        <AccountPhoto src={contact.avatar} online={contact.online} />
      </div>
      <div className="chat-list-item__msg-info">
        <div className="chat-list-item__title-from">{contact.name}</div>
        <div className="chat-list-item__preview_msg">{lastMsgContact(contact, messages)?.text}</div>
      </div>
      <div className="chat-list-item__info-wrap">
        <div className="chat-list-item__date">
          {moment(lastMsgContact(contact, messages)?.date).format("MMM DD, YYYY")}
        </div>
        <div className="chat-list-item__notifications">
          {notSeenMsg > 0 && <div className="chat-list-item__notifications-dot">{notSeenMsg}</div>}
        </div>
      </div>
    </div>
  );
}
export default ChatListItem;
