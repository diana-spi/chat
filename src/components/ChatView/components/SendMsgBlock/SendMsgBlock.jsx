import "./SendMsgBlock.scss";
import { PaperPlaneRight } from "phosphor-react";
import { MessagesContext } from "../../../../App";
import { useContext, useEffect, useState } from "react";
import { SelectedChatContext } from "../../../../features/Chat/Chat";
import { randomMinMax } from "../../../../helpers/random";
import axios from "axios";

function SendMsgBlock() {
  const { messages, setMessages } = useContext(MessagesContext);
  const { selectedChat } = useContext(SelectedChatContext);
  const [enteredMsg, setEnteredMsg] = useState("");
  const [newIncomeMsg, setNewIncomeMsg] = useState(null);

  const onSendMsg = () => {
    if (enteredMsg.length > 0) {
      setMessages([
        ...messages,
        {
          text: enteredMsg,
          date: new Date(),
          income: false,
          contact: selectedChat.id,
        },
      ]);
      setTimeout(() => {
        answerRequest();
      }, randomMinMax(1000, 1500));

      setEnteredMsg("");
    }
  };

  const answerRequest = () => {
    axios.get("https://api.chucknorris.io/jokes/random").then((res) => {
      setNewIncomeMsg({
        text: res.data.value,
        date: new Date(),
        income: true,
        contact: selectedChat.id,
      });
    });
  };

  useEffect(() => {
    if (newIncomeMsg) {
      setMessages([...messages, newIncomeMsg]);
      setNewIncomeMsg(null);
    }
  }, [newIncomeMsg]);

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
