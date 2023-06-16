import { v4 as uuidv4 } from "uuid";
import Recipe from "../../components/Recipe/Recipe";
import { useRecipes } from "../../context/features/RecipesContextProvider";
import "./ShowcaseContainer.scss";

function ShowcaseContainer() {
  const { recipes } = useRecipes();

  const recipesList = recipes?.hits.map(({ recipe }) => {
    return (
      <Recipe
        key={uuidv4()}
        image={recipe.image}
        label={recipe.label}
        cuisineType={recipe.cuisineType}
        healthLabels={recipe.healthLabels}
        servings={recipe.yield}
      />
    );
  });

  return <div className="showcaseContainer">{recipesList}</div>;
}

export default ShowcaseContainer;
