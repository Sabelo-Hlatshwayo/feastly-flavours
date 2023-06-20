import MainContainer from "../../Containers/MainContainer/MainContainer";
import PrimaryHeading from "../../components/PrimaryHeading/PrimaryHeading";
import FavouritesContainer from "../../Containers/FavouritesContainer/FavouritesContainer";
import "./Favourites.scss";

function Favourites() {
  return (
    <main className="favourites">
      <MainContainer>
        <PrimaryHeading title="my favourites" />
        <FavouritesContainer />
      </MainContainer>
    </main>
  );
}

export default Favourites;
