import ChatListItem from "../ChatListItem/ChatListItem";
import "./ChatListBlock.scss";
import contacts from "../../../../data/contacts";
import messages from "../../../../data/message";
import { sortChatByDate } from "../../../../helpers/chatHelpers";

function ChatListBlock({ onSelectContact }) {
  return (
    <div className="chat-list-block">
      <div className="chat-list-block__title">Chats</div>
      <div className="chat-list-block__items">
        {sortChatByDate()
          .filter(
            (contact) =>
              messages.filter((message) => message.contact === contact.id).sort((a, b) => a.date - b.date).length > 0
          )
          .map((contact) => (
            <ChatListItem
              contact={contact}
              onClick={() => {
                onSelectContact(contact);
              }}
            />
          ))}
      </div>
    </div>
  );
}

export default ChatListBlock;
