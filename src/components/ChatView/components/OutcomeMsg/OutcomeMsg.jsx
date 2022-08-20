import MessageContainer from "../MessageContainer/MessageContainer";
import "./OutcomeMsg.scss";
import moment from "moment";

function OutcomeMsg({ message }) {
  return (
    <div className="outcome-msg">
      <MessageContainer type="outcome" message={message.text} />
      <div className="outcome-msg__date">{moment(message.date).format("M/DD/YYYY h:mm A")}</div>
    </div>
  );
}

export default OutcomeMsg;
