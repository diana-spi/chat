import "./Chat.scss";

import ChatListView from "../../components/ChatListView/ChatListView";
import ChatView from "../../components/ChatView/ChatView";
import { useState } from "react";
import contacts from "../../data/contacts";

function Chat() {
  const [selectedContact, setSelectedContact] = useState(contacts[0]);

  return (
    <>
      <div className="chat">
        <div className="chat__chat-list-view">
          <ChatListView onSelectContact={setSelectedContact} />
        </div>
        <div className="chat__chat-msg-view">
          <ChatView selectedContact={selectedContact} />
        </div>
      </div>
    </>
  );
}

export default Chat;
