import AccountPhoto from "../../../AccountPhoto/AccountPhoto";
import "./ContactHeaderBlock.scss";
import { SelectedChatContext } from "../../../../features/Chat/Chat";
import { ChatViewOpenedContext } from "../../../../features/Chat/Chat";
import { useContext } from "react";
import { ArrowLeft } from "phosphor-react";

function ContactHeaderBlock() {
  const { selectedChat } = useContext(SelectedChatContext);
  const { setChatViewOpened } = useContext(ChatViewOpenedContext);

  return (
    <div className="contact-header-block">
      <ArrowLeft className="contact-header-block__back-icon" onClick={() => setChatViewOpened(false)} />
      <div className="contact-header-block__photo">
        <AccountPhoto src={selectedChat.avatar} online={selectedChat.online} />
      </div>
      <div className="contact-header-block__sender-name">{selectedChat?.name}</div>
    </div>
  );
}

export default ContactHeaderBlock;
