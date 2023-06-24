import { v4 as uuidv4 } from "uuid";
import Recipe from "../../components/Recipe/Recipe";
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

  return <div className="favouritesContainer">{favouritesList}</div>;
}

export default FavouritesContainer;
