import MessageContainer from "../MessageContainer/MessageContainer";
import AccountPhoto from "../../../AccountPhoto/AccountPhoto";
import "./IncomeMsg.scss";
import moment from "moment";

function IncomeMsg({ message, selectedContact }) {
  return (
    <div className="income-msg">
      <div className="income-msg__photo">
        <AccountPhoto src={selectedContact.avatar} />
      </div>
      <div className="income-msg__content-wrap">
        <MessageContainer type="income" message={message.text} />
        <div className="income-msg__date">{moment(message.date).format("M/DD/YYYY h:mm A")}</div>
      </div>
    </div>
  );
}

export default IncomeMsg;
