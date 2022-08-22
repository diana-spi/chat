import "./Chat.scss";

import ChatListView from "../../components/ChatListView/ChatListView";
import ChatView from "../../components/ChatView/ChatView";
import { useState } from "react";
import { sortChatByDate } from "../../helpers/chatHelpers";
import contacts from "../../data/contacts";
import { MessagesContext } from "../../App";
import { useContext, createContext } from "react";
import { Navigate } from "react-router-dom";

export const SelectedChatContext = createContext({
  selectedChat: null,
  setSelectedChat: () => {},
});

export const SearchRequestContext = createContext({
  searchRequest: null,
  setSearchRequest: () => {},
});

function Chat() {
  const { messages } = useContext(MessagesContext);
  const [selectedContact, setSelectedContact] = useState(sortChatByDate(contacts, messages)[0]);
  const [searchRequest, setSearchRequest] = useState("");
  if (!localStorage.getItem("loggedIn")) {
    return <Navigate to="/" />;
  }

  return (
    <SelectedChatContext.Provider value={{ selectedChat: selectedContact, setSelectedChat: setSelectedContact }}>
      <SearchRequestContext.Provider value={{ searchRequest, setSearchRequest }}>
        <div className="chat">
          <div className="chat__chat-list-view">
            <ChatListView />
          </div>
          <div className="chat__chat-msg-view">
            <ChatView />
          </div>
        </div>
      </SearchRequestContext.Provider>
    </SelectedChatContext.Provider>
  );
}

export default Chat;
