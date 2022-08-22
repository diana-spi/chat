import "./InputField.scss";
import { MagnifyingGlass, At, Password } from "phosphor-react";
import PropTypes from "prop-types";
import { SearchRequestContext } from "../../features/Chat/Chat";
import { useContext } from "react";

function InputField({ type, placeholder }) {
  const { searchRequest, setSearchRequest } = useContext(SearchRequestContext);

  //chose icon based on type
  const iconsTypeMap = {
    search: <MagnifyingGlass className="input-field__icon" />,
    email: <At className="input-field__icon" />,
    password: <Password className="input-field__icon" />,
  };
  return (
    <div className="input-field">
      {iconsTypeMap[type]}
      <input
        className="input-field__input"
        type={type}
        placeholder={placeholder}
        value={searchRequest}
        onChange={(event) => {
          setSearchRequest(event.target.value);
        }}
      />
    </div>
  );
}

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};
export default InputField;
