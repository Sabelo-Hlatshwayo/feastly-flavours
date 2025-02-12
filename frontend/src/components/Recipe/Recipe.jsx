import { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useFavourites } from "../../context/features/FavouritesContextProvider";
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
  const { favouritesDispatch, favourites } = useFavourites();

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

  const handleFavourites = (e) => {
    e.preventDefault();
    const recipe = { image, label, cuisineType, healthLabels, servings };
    let updatedFavs;

    if (!isFavourite) updatedFavs = [...favourites, recipe];
    else updatedFavs = favourites.filter((fav) => fav.label !== label);

    favouritesDispatch({ type: ACTIONS.SET_FAVOURITES, payload: updatedFavs });
    localStorage.setItem("favourites", JSON.stringify(updatedFavs));
  };

  useEffect(() => {
    const isLiked = favourites.some((fav) => fav.label === label);
    setIsFavourite(isLiked);
  }, [favourites]);

  return (
    <div className="recipe" style={{ backgroundColor: bg }}>
      <a
        href={`https://www.youtube.com/results?search_query=${label} recipe`}
        className="recipe__link"
        target="_blank"
      >
        <RecipeImageSkeleton />
        <img
          src={image}
          alt="Roast Rack of Lamb"
          className="recipe__image"
          onLoad={() => handleOnLoad()}
          style={{ opacity: 0 }}
          ref={imageRef}
        />
        <span className="recipe__servings" onClick={(e) => e.preventDefault()}>
          <Soup />
          <span>{servings} servings</span>
        </span>
        <span className="recipe__like" onClick={(e) => handleFavourites(e)}>
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
