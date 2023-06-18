import { v4 as uuidv4 } from "uuid";
import Recipe from "../../components/Recipe/Recipe";
import { useRecipes } from "../../context/features/RecipesContextProvider";
import "./ShowcaseContainer.scss";

function ShowcaseContainer() {
  const { recipes, error, loading } = useRecipes();

  console.log(recipes, error, loading);

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

  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading...</h1>;

  return <div className="showcaseContainer">{recipesList}</div>;
}

export default ShowcaseContainer;
