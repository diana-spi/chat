import AccountPhoto from "../../../AccountPhoto/AccountPhoto";
import "./ContactHeaderBlock.scss";

function ContactHeaderBlock() {
  return (
    <div className="contact-header-block">
      <div className="contact-header-block__photo">
        <AccountPhoto />
      </div>
      <div className="contact-header-block__sender-name">Josefina</div>
    </div>
  );
}

export default ContactHeaderBlock;
