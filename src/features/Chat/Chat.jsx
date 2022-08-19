import "./Chat.scss";

import ChatListView from "../../components/ChatListView/ChatListView";
import ChatView from "../../components/ChatView/ChatView";

function Chat() {
  return (
    <>
      <div className="chat">
        <div className="chat__chat-list-view">
          <ChatListView />
        </div>
        <div className="chat__chat-msg-view">
          <ChatView />
        </div>
      </div>
    </>
  );
}

export default Chat;
