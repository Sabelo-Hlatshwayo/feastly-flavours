import { v4 as uuidv4 } from "uuid";
import Recipe from "../../components/Recipe/Recipe";
import RecipeSkeleton from "../../components/RecipeSkeleton/RecipeSkeleton";
import { useRecipes } from "../../context/features/RecipesContextProvider";
import "./ShowcaseContainer.scss";

function ShowcaseContainer() {
  // const { recipes, error, loading } = useRecipes();

  const recipes = useRecipes()?.recipes;
  const error = useRecipes()?.error;
  const loading = useRecipes()?.loading;

  const recipesList = recipes?.hits?.map(({ recipe }) => {
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
    return <RecipeSkeleton key={uuidv4()} />;
  });

  if (error) return <h1>{error}</h1>;

  return (
    <div className="showcaseContainer">
      {loading ? skeletonList : recipesList}
    </div>
  );
}

export default ShowcaseContainer;
