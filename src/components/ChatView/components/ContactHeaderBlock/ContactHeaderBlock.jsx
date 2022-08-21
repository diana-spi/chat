import AccountPhoto from "../../../AccountPhoto/AccountPhoto";
import "./ContactHeaderBlock.scss";
import { SelectedChatContext } from "../../../../features/Chat/Chat";
import { useContext } from "react";

function ContactHeaderBlock() {
  const { selectedChat } = useContext(SelectedChatContext);
  return (
    <div className="contact-header-block">
      <div className="contact-header-block__photo">
        <AccountPhoto src={selectedChat.avatar} online={selectedChat.online} />
      </div>
      <div className="contact-header-block__sender-name">{selectedChat?.name}</div>
    </div>
  );
}

export default ContactHeaderBlock;
