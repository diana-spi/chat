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

export const ChatViewOpenedContext = createContext({
  ChatViewOpened: false,
  setChatViewOpened: () => {},
});

function Chat() {
  const { messages } = useContext(MessagesContext);
  const [ChatViewOpened, setChatViewOpened] = useState(false);
  const [selectedContact, setSelectedContact] = useState(sortChatByDate(contacts, messages)[0]);
  const [searchRequest, setSearchRequest] = useState("");
  if (!localStorage.getItem("loggedIn")) {
    return <Navigate to="/" />;
  }

  return (
    <SelectedChatContext.Provider value={{ selectedChat: selectedContact, setSelectedChat: setSelectedContact }}>
      <SearchRequestContext.Provider value={{ searchRequest, setSearchRequest }}>
        <ChatViewOpenedContext.Provider value={{ ChatViewOpened, setChatViewOpened }}>
          <div className="chat">
            <div className={`chat__chat-list-view ${ChatViewOpened ? "close" : ""}`}>
              <ChatListView />
            </div>
            <div className={`chat__chat-msg-view ${ChatViewOpened ? "" : "close"}`}>
              <ChatView />
            </div>
          </div>
        </ChatViewOpenedContext.Provider>
      </SearchRequestContext.Provider>
    </SelectedChatContext.Provider>
  );
}

export default Chat;
