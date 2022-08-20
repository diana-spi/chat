import "./AccountInfoBlock.scss";
import AccountPhoto from "../../../AccountPhoto/AccountPhoto";

function AccountInfoBlock() {
  return (
    <div className="account-info-block">
      <div className="account-info-block__acc-photo">
        <AccountPhoto online={true} />
      </div>
    </div>
  );
}

export default AccountInfoBlock;
