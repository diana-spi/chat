import "./SearchBlock.scss";
import InputField from "../../../InputField/InputField";
import { SearchRequestContext } from "../../../../features/Chat/Chat";
import { useContext } from "react";

function SearchBlock() {
  const { searchRequest, setSearchRequest } = useContext(SearchRequestContext);
  return (
    <div className="search-block">
      <InputField
        type="search"
        placeholder="Search or start new chat"
        value={searchRequest}
        onChange={(event) => {
          setSearchRequest(event.target.value);
        }}
      />
    </div>
  );
}

export default SearchBlock;
