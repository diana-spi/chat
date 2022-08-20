import AccountPhoto from "../../../AccountPhoto/AccountPhoto";
import "./ChatListItem.scss";
import messages from "../../../../data/message";
import moment from "moment";

const lastMsg = (contactId) => {
  const filtered = messages.filter((message) => message.contact === contactId).sort((a, b) => a.date - b.date);
  return filtered[filtered.length - 1];
};

function ChatListItem({ contact, onClick, selected }) {
  return (
    <div className={`chat-list-item ${selected ? "chat-list-item--selected" : ""}`} onClick={onClick}>
      <div className="chat-list-item__photo">
        <AccountPhoto src={contact.avatar} online={contact.online} />
      </div>
      <div className="chat-list-item__msg-info">
        <div className="chat-list-item__title-from">{contact.name}</div>
        <div className="chat-list-item__preview_msg">{lastMsg(contact.id)?.text}</div>
      </div>
      <div className="chat-list-item__date">{moment(lastMsg(contact.id)?.date).format("MMM DD, YYYY")}</div>
    </div>
  );
}
export default ChatListItem;
