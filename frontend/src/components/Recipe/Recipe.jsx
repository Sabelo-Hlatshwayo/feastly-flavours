import { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useRecipes } from "../../context/features/RecipesContextProvider";
import { Heart, Soup, HeartPulse } from "lucide-react";
import { ACTIONS } from "../../context/actions";
import generateRandomNumber from "../../utils/generateRandomNumber";
import generateRandomColor from "../../utils/generateRandomColor";
import RecipeImageSkeleton from "../RecipeImageSkeleton/RecipeImageSkeleton";
import truncateText from "../../utils/truncateText";
import "./Recipe.scss";

function Recipe({ image, label, cuisineType, healthLabels, servings }) {
  const [isFavourite, setIsFavourite] = useState(false);
  const imageRef = useRef(null);
  const { dispatch, favourites } = useRecipes();

  const { bg, badge } = generateRandomColor();

  const healthLabelsList = [];

  while (true) {
    if (healthLabelsList.length === 2) break;

    const randomIndex = generateRandomNumber(0, healthLabels.length - 1);
    if (!healthLabelsList.includes(healthLabels[randomIndex])) {
      healthLabelsList.push(healthLabels[randomIndex]);
    }
  }

  const handleOnLoad = () => {
    imageRef.current.style.opacity = 1;
    imageRef.current.previousElementSibling.style.opacity = 0;
  };

  const handleFavourites = () => {
    const recipe = { image, label, cuisineType, healthLabels, servings };
    let updatedFavs;

    if (!isFavourite) {
      updatedFavs = [...favourites, recipe];
      dispatch({ type: ACTIONS.ADD_FAVOURITE, payload: updatedFavs });
    } else {
      updatedFavs = favourites.filter((fav) => fav.label !== label);
      dispatch({ type: ACTIONS.REMOVE_FAVOURITE, payload: updatedFavs });
    }
  };

  useEffect(() => {
    const isLiked = favourites.some((fav) => fav.label === label);
    setIsFavourite(isLiked);
  }, []);

  return (
    <div className="recipe" style={{ backgroundColor: bg }}>
      <a href="#" className="recipe__link">
        <RecipeImageSkeleton />
        <img
          src={image}
          alt="Roast Rack of Lamb"
          className="recipe__image"
          onLoad={() => handleOnLoad()}
          style={{ opacity: 0 }}
          ref={imageRef}
        />
        <span className="recipe__servings">
          <Soup />
          <span>{servings} servings</span>
        </span>
        <span className="recipe__like" onClick={() => handleFavourites()}>
          <Heart
            style={{
              fill: isFavourite ? "#ef4444" : "#fff",
              stroke: isFavourite ? "#ef4444" : "#1f2937",
            }}
          />
        </span>
      </a>

      <h4 className="recipe__heading">{truncateText(label)}</h4>
      <h5 className="recipe__subheading">{cuisineType}</h5>
      <div className="recipe__health">
        {healthLabelsList.map((label) => {
          return (
            <span key={uuidv4()} style={{ backgroundColor: badge }}>
              <HeartPulse />
              <span>{label}</span>
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default Recipe;
