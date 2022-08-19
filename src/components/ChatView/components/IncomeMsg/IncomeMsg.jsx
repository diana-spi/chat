import MessageContainer from "../MessageContainer/MessageContainer";
import AccountPhoto from "../../../AccountPhoto/AccountPhoto";
import "./IncomeMsg.scss";

function IncomeMsg() {
  return (
    <div className="income-msg">
      <div className="income-msg__photo">
        <AccountPhoto />
      </div>
      <div className="income-msg__content-wrap">
        <MessageContainer text="Hello" type="income" />
        <div className="income-msg__date">04.08.2022</div>
      </div>
    </div>
  );
}

export default IncomeMsg;
