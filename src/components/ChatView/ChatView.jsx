import ChatBlock from "./components/ChatBlock/ChatBlock";
import ContactHeaderBlock from "./components/ContactHeaderBlock/ContactHeaderBlock";
import "./ChatView.scss";
import SendMsgBlock from "./components/SendMsgBlock/SendMsgBlock";

function ChatView({ selectedContact }) {
  return (
    <div className="chat-view">
      <div className="chat-view__header">
        <ContactHeaderBlock selectedContact={selectedContact} />
      </div>
      <div className="chat-view__chat">
        <ChatBlock selectedContact={selectedContact} />
      </div>
      <div className="chat-view__send">
        <SendMsgBlock />
      </div>
    </div>
  );
}

export default ChatView;
