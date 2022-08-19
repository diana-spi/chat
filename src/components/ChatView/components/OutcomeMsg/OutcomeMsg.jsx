import MessageContainer from "../MessageContainer/MessageContainer";
import "./OutcomeMsg.scss";

function OutcomeMsg() {
  return (
    <div className="outcome-msg">
      <MessageContainer text="Outcome" date="12:00" type="outcome" />
      <div className="outcome-msg__date">04.08.2022</div>
    </div>
  );
}

export default OutcomeMsg;
