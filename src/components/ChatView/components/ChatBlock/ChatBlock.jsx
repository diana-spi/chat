import IncomeMsg from "../IncomeMsg/IncomeMsg";
import OutcomeMsg from "../OutcomeMsg/OutcomeMsg";
import "./ChatBlock.scss";
import { useContext, useEffect, useRef } from "react";
import { MessagesContext } from "../../../../App";

function ChatBlock({ selectedContact }) {
  const messages = useContext(MessagesContext);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "auto" });
  };

  const filteredMessages = messages.filter((message) => message.contact === selectedContact.id);
  useEffect(() => {
    scrollToBottom();
  }, [filteredMessages]);

  return (
    <div className="chat-block">
      {filteredMessages.map((message) => {
        if (message.income) {
          return (
            <>
              <IncomeMsg key={message.id} message={message} selectedContact={selectedContact} />
              <div ref={messagesEndRef} />
            </>
          );
        }
        return (
          <>
            <OutcomeMsg key={message.id} message={message} />
            <div ref={messagesEndRef} />
          </>
        );
      })}
    </div>
  );
}

export default ChatBlock;
