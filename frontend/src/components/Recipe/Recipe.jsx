import { Heart, Soup, HeartPulse } from "lucide-react";

function Recipe() {
  return (
    <div className="recipe">
      <a href="#" className="recipe__link">
        <img src="./1.jpg" alt="Roast Rack of Lamb" />
        <span className="recipe__servings">
          <Soup />
          <span>4 servings</span>
        </span>
        <span className="recipe__like">
          <Heart />
        </span>
      </a>

      <h4 className="recipe__heading">Roast Rack of Lamb</h4>
      <h5 className="recipe__subheading">american kitchen</h5>
      <div className="recipe__health">
        <span>
          <HeartPulse />
          <span>Sugar-Conscious</span>
        </span>
        <span>
          <HeartPulse />
          <span>Low Potassium</span>
        </span>
      </div>
    </div>
  );
}

export default Recipe;
