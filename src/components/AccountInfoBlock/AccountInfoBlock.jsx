import "./AccountInfoBlock.scss";
import { CheckCircle } from "phosphor-react";

function AccountInfoBlock() {
  return (
    <div className="account-info-block">
      <img className="account-info-block__acc-img" src="img/avatar-placeholder.png" alt="Avatar" />
      <CheckCircle className="account-info-block__status" />
    </div>
  );
}

export default AccountInfoBlock;
