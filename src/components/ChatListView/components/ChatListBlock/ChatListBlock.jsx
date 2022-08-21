import ChatListItem from "../ChatListItem/ChatListItem";
import "./ChatListBlock.scss";
import contacts from "../../../../data/contacts";
import { sortChatByDate } from "../../../../helpers/chatHelpers";
import { useContext } from "react";
import { MessagesContext } from "../../../../App";
import { SelectedChatContext } from "../../../../features/Chat/Chat";

export function ChatListBlock() {
  const { messages } = useContext(MessagesContext);
  const { selectedChat, setSelectedChat } = useContext(SelectedChatContext);

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
              selected={selectedChat.id === contact.id}
              key={contact.id}
              contact={contact}
              onClick={() => {
                setSelectedChat(contact);
              }}
            />
          ))}
      </div>
    </div>
  );
}

export default ChatListBlock;
