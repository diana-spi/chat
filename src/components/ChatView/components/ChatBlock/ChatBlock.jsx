import IncomeMsg from "../IncomeMsg/IncomeMsg";
import OutcomeMsg from "../OutcomeMsg/OutcomeMsg";
import "./ChatBlock.scss";
import { useContext, useEffect, useRef } from "react";
import { MessagesContext } from "../../../../App";
import { SelectedChatContext } from "../../../../features/Chat/Chat";

function ChatBlock() {
  const { messages, setMessages } = useContext(MessagesContext);
  const messagesEndRef = useRef(null);
  const { selectedChat } = useContext(SelectedChatContext);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "auto" });
  };

  const filteredMessages = messages.filter((message) => message.contact === selectedChat.id);
  useEffect(() => {
    scrollToBottom();
    if (filteredMessages.some((message) => message.isSeen === false)) {
      const seenMsg = messages.map((message) => {
        filteredMessages.forEach((msg) => {
          if (message.id === msg.id) {
            message.isSeen = true;
          }
        });
        return message;
      });
      setMessages(seenMsg);
    }
  }, [filteredMessages]);

  return (
    <div className="chat-block">
      {filteredMessages.map((message) => {
        if (message.income) {
          return (
            <div key={message.id}>
              <IncomeMsg message={message} />
              <div ref={messagesEndRef} />
            </div>
          );
        }
        return (
          <div key={message.id}>
            <OutcomeMsg message={message} />
            <div ref={messagesEndRef} />
          </div>
        );
      })}
    </div>
  );
}

export default ChatBlock;
