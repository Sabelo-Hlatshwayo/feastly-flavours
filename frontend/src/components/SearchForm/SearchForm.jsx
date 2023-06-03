import { Search } from "lucide-react";

function SearchForm() {
  return (
    <form className="searchForm">
      <input
        type="text"
        placeholder="What do you want to cook today?"
        name="search"
        className="searchForm__input"
      />
      <button type="submit" className="searchForm__button">
        <Search />
      </button>
    </form>
  );
}

export default SearchForm;
