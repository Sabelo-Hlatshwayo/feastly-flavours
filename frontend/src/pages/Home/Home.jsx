import "./Home.scss";
import { Search } from "lucide-react";

function Home() {
  return (
    <main className="home">
      <form className="searchForm">
        <input
          type="text"
          placeholder="What do you want to cook today?"
          className="searchForm__input"
        />
        <button type="submit" className="searchForm__button">
          <Search />
        </button>
      </form>
    </main>
  );
}

export default Home;
