import MainContainer from "../../Containers/MainContainer/MainContainer";
import PrimaryHeading from "../../components/PrimaryHeading/PrimaryHeading";
import "./Favourites.scss";

function Favourites() {
  return (
    <main className="favourites">
      <MainContainer>
        <PrimaryHeading title="my favourites" />
      </MainContainer>
    </main>
  );
}

export default Favourites;
