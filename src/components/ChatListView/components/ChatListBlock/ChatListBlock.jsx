import ChatListItem from "../ChatListItem/ChatListItem";
import "./ChatListBlock.scss";
import contacts from "../../../../data/contacts";
import messages from "../../../../data/message";
import { sortChatByDate } from "../../../../helpers/chatHelpers";
import { useState } from "react";

function ChatListBlock({ onSelectContact }) {
  const [currentChat, setCurrentChat] = useState(sortChatByDate(contacts, messages)[0]);
  return (
    <div className="chat-list-block">
      <div className="chat-list-block__title">Chats</div>
      <div className="chat-list-block__items">
        {sortChatByDate(contacts, messages)
          .filter(
            (contact) =>
              messages.filter((message) => message.contact === contact.id).sort((a, b) => a.date - b.date).length > 0
          )
          .map((contact) => (
            <ChatListItem
              selected={currentChat.id === contact.id}
              key={contact.id}
              contact={contact}
              onClick={() => {
                onSelectContact(contact);
                setCurrentChat(contact);
              }}
            />
          ))}
      </div>
    </div>
  );
}

export default ChatListBlock;
