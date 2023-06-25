import { useEffect, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import { useQueryContext } from "../../context/features/QueryContextProvider";
import Recipe from "../../components/Recipe/Recipe";
import RecipeSkeleton from "../../components/RecipeSkeleton/RecipeSkeleton";
import { ACTIONS } from "../../context/actions";
import recipesReducer from "../../context/reducers/recipesReducer";
import NotFound from "../../components/NotFound/NotFound";
import "./ShowcaseContainer.scss";

function ShowcaseContainer() {
  const initialState = {
    recipes: [],
    error: null,
    loading: true,
    favourites: [],
  };

  const [state, recipesDispatch] = useReducer(recipesReducer, initialState);
  const { query } = useQueryContext();

  useEffect(() => {
    const fetchRecipes = async (query) => {
      try {
        const url = `${import.meta.env.VITE_BASE_URL}${query}`;
        const response = await fetch(url);

        if (response.status >= 400) {
          throw new Error("Something went wrong. Try reloading.");
        }

        const recipes = await response.json();

        recipesDispatch({ type: ACTIONS.SET_RECIPES, payload: recipes });
        recipesDispatch({ type: ACTIONS.SET_ERROR, payload: null });
      } catch (err) {
        recipesDispatch({ type: ACTIONS.SET_RECIPES, payload: [] });
        recipesDispatch({ type: ACTIONS.SET_ERROR, payload: err.message });
        console.error(err.message);
      } finally {
        recipesDispatch({ type: ACTIONS.SET_LOADING, payload: false });
      }
    };

    fetchRecipes(query);
  }, [query]);

  const recipesList = state?.recipes?.hits?.map(({ recipe }) => {
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

  if (state.error) {
    throw new Error(state.error);
  }

  return (
    <>
      {state.recipes?.hits?.length === 0 && (
        <NotFound message=" Oops! We couldn't find any recipes matching your search. Try another keyword!" />
      )}

      <div className="showcaseContainer">
        {state.loading ? skeletonList : recipesList}
      </div>
    </>
  );
}

export default ShowcaseContainer;
