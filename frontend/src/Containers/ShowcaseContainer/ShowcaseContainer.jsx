import { v4 as uuidv4 } from "uuid";
import Recipe from "../../components/Recipe/Recipe";
import { useRecipes } from "../../context/features/RecipesContextProvider";
import "./ShowcaseContainer.scss";

function ShowcaseContainer() {
  const { recipes, error, loading } = useRecipes();

  // console.log(recipes, error, loading);

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

  const skeletonList = new Array(20).fill(undefined).map(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
    );
  });

  if (error) return <h1>{error}</h1>;

  return (
    <div className="showcaseContainer">
      {loading ? skeletonList : recipesList}
    </div>
  );
}

export default ShowcaseContainer;
