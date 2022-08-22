import "./InputField.scss";
import { MagnifyingGlass, At, Password } from "phosphor-react";
import PropTypes from "prop-types";

function InputField({ type, placeholder, value, onChange }) {
  //chose icon based on type
  const iconsTypeMap = {
    search: <MagnifyingGlass className="input-field__icon" />,
    text: <At className="input-field__icon" />,
    password: <Password className="input-field__icon" />,
  };
  return (
    <div className="input-field">
      {iconsTypeMap[type]}
      <input className="input-field__input" type={type} placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
}

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};
export default InputField;
