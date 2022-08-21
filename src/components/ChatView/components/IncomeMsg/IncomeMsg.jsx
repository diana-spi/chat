import MessageContainer from "../MessageContainer/MessageContainer";
import AccountPhoto from "../../../AccountPhoto/AccountPhoto";
import "./IncomeMsg.scss";
import moment from "moment";
import { SelectedChatContext } from "../../../../features/Chat/Chat";
import { useContext } from "react";

function IncomeMsg({ message }) {
  const { selectedChat } = useContext(SelectedChatContext);
  return (
    <div className="income-msg">
      <div className="income-msg__photo">
        <AccountPhoto src={selectedChat.avatar} />
      </div>
      <div className="income-msg__content-wrap">
        <MessageContainer type="income" message={message.text} />
        <div className="income-msg__date">{moment(message.date).format("M/DD/YYYY h:mm A")}</div>
      </div>
    </div>
  );
}

export default IncomeMsg;
