import "./Chat.scss";

import ChatListView from "../../components/ChatListView/ChatListView";
import ChatView from "../../components/ChatView/ChatView";
import { useState } from "react";
import { sortChatByDate } from "../../helpers/chatHelpers";
import contacts from "../../data/contacts";
import { MessagesContext } from "../../App";
import { useContext, createContext } from "react";

export const SelectedChatContext = createContext({
  selectedChat: null,
  setSelectedChat: () => {},
});

function Chat() {
  const { messages } = useContext(MessagesContext);
  const [selectedContact, setSelectedContact] = useState(sortChatByDate(contacts, messages)[0]);

  return (
    <SelectedChatContext.Provider value={{ selectedChat: selectedContact, setSelectedChat: setSelectedContact }}>
      <div className="chat">
        <div className="chat__chat-list-view">
          <ChatListView />
        </div>
        <div className="chat__chat-msg-view">
          <ChatView />
        </div>
      </div>
    </SelectedChatContext.Provider>
  );
}

export default Chat;
