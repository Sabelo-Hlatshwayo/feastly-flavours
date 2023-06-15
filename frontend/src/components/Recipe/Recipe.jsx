import { Heart, Soup, HeartPulse } from "lucide-react";
import "./Recipe.scss";

function Recipe({ image, label, cuisineType, healthLabels }) {
  return (
    <div className="recipe">
      <a href="#" className="recipe__link">
        <img src={image} alt="Roast Rack of Lamb" className="recipe__image" />
        <span className="recipe__servings">
          <Soup />
          <span>4 servings</span>
        </span>
        <span className="recipe__like">
          <Heart />
        </span>
      </a>

      <h4 className="recipe__heading">{label}</h4>
      <h5 className="recipe__subheading">{cuisineType}</h5>
      <div className="recipe__health">
        {healthLabels.map((label) => {
          return (
            <span>
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
