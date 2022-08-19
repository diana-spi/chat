import "./SendMsgBlock.scss";
import { PaperPlaneRight } from "phosphor-react";

function SendMsgBlock() {
  return (
    <div className="send-msg-block">
      <div className="send-msg-block__input-container">
        <input className="send-msg-block__input-field" type="text" placeholder="Type your message" />
        <PaperPlaneRight className="send-msg-block__icon" />
      </div>
    </div>
  );
}

export default SendMsgBlock;
