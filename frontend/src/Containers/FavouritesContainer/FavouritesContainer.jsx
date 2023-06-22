import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useRecipes } from "../../context/features/RecipesContextProvider";
import Recipe from "../../components/Recipe/Recipe";
import "./FavouritesContainer.scss";

function FavouritesContainer() {
  const [favourites, setfavourites] = useState([]);

  // const favouritesList = favourites.map((favourite) => {
  //   return (
  //     <Recipe
  //       key={uuidv4()}
  //       image={favourite.image}
  //       label={favourite.label}
  //       cuisineType={favourite.cuisineType}
  //       healthLabels={favourite.healthLabels}
  //       servings={favourite.servings}
  //     />
  //   );
  // });

  // useEffect(() => {
  //   const favs = JSON.parse(localStorage.getItem("favourites"));
  //   setfavourites(favs);
  // }, []);

  // return <div className="favouritesContainer">{favouritesList}</div>;
  return <div>sabelo</div>;
}

export default FavouritesContainer;
