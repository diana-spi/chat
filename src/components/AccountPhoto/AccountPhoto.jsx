import "./AccountPhoto.scss";
import { CheckCircle } from "phosphor-react";
import PropTypes from "prop-types";

function AccountPhoto({ src, online }) {
  return (
    <div className="account-photo">
      <img className="account-photo__acc-img" src={src || "img/avatars/avatar-placeholder.png"} alt="Avatar" />
      {online && <CheckCircle className="account-photo__status" />}
    </div>
  );
}

AccountPhoto.propTypes = {
  src: PropTypes.string,
};

export default AccountPhoto;
