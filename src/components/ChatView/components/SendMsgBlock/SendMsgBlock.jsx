import "./SendMsgBlock.scss";
import { PaperPlaneRight } from "phosphor-react";
import { MessagesContext } from "../../../../App";
import { useContext, useEffect, useState } from "react";
import { SelectedChatContext } from "../../../../features/Chat/Chat";

function SendMsgBlock() {
  const { messages, setMessages } = useContext(MessagesContext);
  const [enteredMsg, setEnteredMsg] = useState("");
  const { selectedChat } = useContext(SelectedChatContext);

  const onSendMsg = () => {
    setMessages([
      ...messages,
      {
        text: enteredMsg,
        date: new Date(),
        income: false,
        contact: selectedChat.id,
      },
    ]);
    setTimeout(() => {}, 10000);
    setEnteredMsg("");
  };

  useEffect(() => {
    setEnteredMsg("");
  }, [selectedChat]);

  return (
    <div className="send-msg-block">
      <div className="send-msg-block__input-container">
        <input
          className="send-msg-block__input-field"
          type="text"
          placeholder="Type your message"
          value={enteredMsg}
          onChange={(e) => setEnteredMsg(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              onSendMsg();
            }
          }}
        />

        <button className="send-msg-block__button">
          <PaperPlaneRight className="send-msg-block__icon" onClick={onSendMsg} />
        </button>
      </div>
    </div>
  );
}

export default SendMsgBlock;
