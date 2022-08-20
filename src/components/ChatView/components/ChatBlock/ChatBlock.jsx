import IncomeMsg from "../IncomeMsg/IncomeMsg";
import OutcomeMsg from "../OutcomeMsg/OutcomeMsg";
import "./ChatBlock.scss";
import messages from "../../../../data/message";
import { createContext, useEffect, useRef } from "react";

function ChatBlock({ selectedContact }) {
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
