import ChatListItem from "../ChatListItem/ChatListItem";
import "./ChatListBlock.scss";

function ChatListBlock() {
  return (
    <div className="chat-list-block">
      <div className="chat-list-block__title">Chats</div>
      <div className="chat-list-block__items">
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
      </div>
    </div>
  );
}

export default ChatListBlock;
