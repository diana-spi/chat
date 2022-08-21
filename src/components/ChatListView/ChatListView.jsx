import "./ChatListView.scss";
import AccountInfoBlock from "./components/AccountInfoBlock/AccountInfoBlock";
import SearchBlock from "./components/SearchBlock/SearchBlock";
import ChatListBlock from "./components/ChatListBlock/ChatListBlock";

function ChatListView() {
  return (
    <div className="chat-list-view">
      <AccountInfoBlock />
      <SearchBlock />
      <ChatListBlock />
    </div>
  );
}

export default ChatListView;
