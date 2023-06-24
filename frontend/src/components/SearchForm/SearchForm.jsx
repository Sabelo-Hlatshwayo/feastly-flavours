import { useState } from "react";
import { Search } from "lucide-react";
import { useQueryContext } from "../../context/features/QueryContextProvider";
import { ACTIONS } from "../../context/actions";
import "./SearchForm.scss";

function SearchForm() {
  const [query, setQuery] = useState("");
  const { queryDispatch } = useQueryContext();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const querySanitized = query.toLowerCase().trim();
    queryDispatch({ type: ACTIONS.SET_QUERY, payload: querySanitized });
  };

  return (
    <form className="searchForm" onSubmit={(e) => handleOnSubmit(e)}>
      <input
        type="text"
        placeholder="What do you want to cook today?"
        name="search"
        className="searchForm__input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" className="searchForm__button">
        <Search />
      </button>
    </form>
  );
}

export default SearchForm;
