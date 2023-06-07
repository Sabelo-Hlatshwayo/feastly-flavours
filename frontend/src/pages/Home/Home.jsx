import SearchForm from "../../components/SearchForm/SearchForm";
import MainContainer from "../../Containers/MainContainer/MainContainer";
import PrimaryHeading from "../../components/PrimaryHeading/PrimaryHeading";
import "./Home.scss";

function Home() {
  return (
    <main className="home">
      <MainContainer>
        <SearchForm />
        <PrimaryHeading title="recommended recipes" />
      </MainContainer>
    </main>
  );
}

export default Home;
