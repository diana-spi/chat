import AccountPhoto from "../../../AccountPhoto/AccountPhoto";
import "./ChatListItem.scss";

function ChatListItem() {
  return (
    <div className="chat-list-item">
      <div className="chat-list-item__photo">
        <AccountPhoto />
      </div>
      <div className="chat-list-item__msg-info">
        <div className="chat-list-item__title-from">Alice Freeman</div>
        <div className="chat-list-item__preview_msg">
          You are the worst! You are the worst! You are the worst! You are the worst! You are the worst! You are the
          worst! You are the worst! You are the worst! You are the worst! You are the worst! You are the worst! You are
          the worst!
        </div>
      </div>
      <div className="chat-list-item__date">Jun 12, 2017</div>
    </div>
  );
}
export default ChatListItem;
