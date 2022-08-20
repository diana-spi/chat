import AccountPhoto from "../../../AccountPhoto/AccountPhoto";
import "./ContactHeaderBlock.scss";

function ContactHeaderBlock({ selectedContact }) {
  console.log("selectedContact", selectedContact);
  return (
    <div className="contact-header-block">
      <div className="contact-header-block__photo">
        <AccountPhoto />
      </div>
      <div className="contact-header-block__sender-name">{selectedContact?.name}</div>
    </div>
  );
}

export default ContactHeaderBlock;
