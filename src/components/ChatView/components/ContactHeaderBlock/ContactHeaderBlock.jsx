import AccountPhoto from "../../../AccountPhoto/AccountPhoto";
import "./ContactHeaderBlock.scss";

function ContactHeaderBlock({ selectedContact }) {
  return (
    <div className="contact-header-block">
      <div className="contact-header-block__photo">
        <AccountPhoto src={selectedContact.avatar} online={selectedContact.online} />
      </div>
      <div className="contact-header-block__sender-name">{selectedContact?.name}</div>
    </div>
  );
}

export default ContactHeaderBlock;
