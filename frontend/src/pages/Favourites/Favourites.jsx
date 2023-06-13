import MainContainer from "../../Containers/MainContainer/MainContainer";
import PrimaryHeading from "../../components/PrimaryHeading/PrimaryHeading";
import ShowcaseContainer from "../../Containers/ShowcaseContainer/ShowcaseContainer";
import "./Favourites.scss";

function Favourites() {
  return (
    <main className="favourites">
      <MainContainer>
        <PrimaryHeading title="my favourites" />
        <ShowcaseContainer />
      </MainContainer>
    </main>
  );
}

export default Favourites;
