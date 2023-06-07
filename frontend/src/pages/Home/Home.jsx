import SearchForm from "../../components/SearchForm/SearchForm";
import MainContainer from "../../Containers/MainContainer/MainContainer";
import PrimaryHeading from "../../components/PrimaryHeading/PrimaryHeading";
import SubHeading from "../../components/SubHeading/SubHeading";
import "./Home.scss";

function Home() {
  return (
    <main className="home">
      <MainContainer>
        <SearchForm />
        <PrimaryHeading title="recommended recipes" />
        <SubHeading title="popular choices" />
      </MainContainer>
    </main>
  );
}

export default Home;
