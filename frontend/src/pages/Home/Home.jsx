import SearchForm from "../../components/SearchForm/SearchForm";
import MainContainer from "../../Containers/MainContainer/MainContainer";
import "./Home.scss";

function Home() {
  return (
    <main className="home">
      <MainContainer>
        <SearchForm />
      </MainContainer>
    </main>
  );
}

export default Home;
