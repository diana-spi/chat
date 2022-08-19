import "./SearchBlock.scss";
import InputField from "../../../InputField/InputField";

function SearchBlock() {
  return (
    <div className="search-block">
      <InputField type="search" placeholder="Search or start new chat" />
    </div>
  );
}

export default SearchBlock;
