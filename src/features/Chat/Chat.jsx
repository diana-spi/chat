import "./Chat.scss";

import ChatListView from "../../components/ChatListView/ChatListView";
import ChatView from "../../components/ChatView/ChatView";
import { useState } from "react";
import { sortChatByDate } from "../../helpers/chatHelpers";
import contacts from "../../data/contacts";
import { MessagesContext } from "../../App";
import { useContext } from "react";

function Chat() {
  const messages = useContext(MessagesContext);
  const [selectedContact, setSelectedContact] = useState(sortChatByDate(contacts, messages)[0]);

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
