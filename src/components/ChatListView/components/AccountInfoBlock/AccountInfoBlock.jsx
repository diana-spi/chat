import "./AccountInfoBlock.scss";
import AccountPhoto from "../../../AccountPhoto/AccountPhoto";
import { SignOut } from "phosphor-react";
import { useNavigate } from "react-router-dom";

function AccountInfoBlock() {
  const navigate = useNavigate();
  return (
    <div className="account-info-block">
      <div className="account-info-block__acc-photo">
        <AccountPhoto online={true} />
      </div>
      <div
        className="account-info-block__log-out"
        onClick={() => {
          localStorage.removeItem("loggedIn");
          navigate("/");
        }}
      >
        <SignOut className="account-info-block__log-out-icon" />
      </div>
    </div>
  );
}

export default AccountInfoBlock;
