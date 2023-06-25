import { v4 as uuidv4 } from "uuid";
import Recipe from "../../components/Recipe/Recipe";
import NotFound from "../../components/NotFound/NotFound";
import { useFavourites } from "../../context/features/FavouritesContextProvider";
import "./FavouritesContainer.scss";

function FavouritesContainer() {
  const { favourites } = useFavourites();

  const favouritesList = favourites.map((favourite) => {
    return (
      <Recipe
        key={uuidv4()}
        image={favourite.image}
        label={favourite.label}
        cuisineType={favourite.cuisineType}
        healthLabels={favourite.healthLabels}
        servings={favourite.servings}
      />
    );
  });

  return (
    <>
      {favourites.length === 0 ? (
        <NotFound message="Your favorites list is feeling a little lonely! Start adding some delicious recipes!" />
      ) : (
        <div className="favouritesContainer">{favouritesList}</div>
      )}
    </>
  );
}

export default FavouritesContainer;
