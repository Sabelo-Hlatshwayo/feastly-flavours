import { v4 as uuidv4 } from "uuid";
import { Heart, Soup, HeartPulse } from "lucide-react";
import generateRandomNumber from "../../utils/generateRandomNumber";
import generateRandomColor from "../../utils/generateRandomColor";
import truncateText from "../../utils/truncateText";
import "./Recipe.scss";

function Recipe({ image, label, cuisineType, healthLabels, servings }) {
  const { bg, badge } = generateRandomColor();

  const healthLabelsList = [];

  while (true) {
    if (healthLabelsList.length === 2) break;

    const randomIndex = generateRandomNumber(0, healthLabels.length - 1);
    if (!healthLabelsList.includes(healthLabels[randomIndex])) {
      healthLabelsList.push(healthLabels[randomIndex]);
    }
  }

  return (
    <div className="recipe" style={{ backgroundColor: bg }}>
      <a href="#" className="recipe__link">
        <img src={image} alt="Roast Rack of Lamb" className="recipe__image" />
        <span className="recipe__servings">
          <Soup />
          <span>{servings} servings</span>
        </span>
        <span className="recipe__like">
          <Heart />
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
