import { v4 as uuidv4 } from "uuid";
import { useRecipes } from "../../context/features/RecipesContextProvider";
import Recipe from "../../components/Recipe/Recipe";
import "./FavouritesContainer.scss";

function FavouritesContainer() {
  // const [favourites, setfavourites] = useState([]);
  const { favourites } = useRecipes();

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
