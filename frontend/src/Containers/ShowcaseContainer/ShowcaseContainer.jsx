import { useEffect, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import Recipe from "../../components/Recipe/Recipe";
import RecipeSkeleton from "../../components/RecipeSkeleton/RecipeSkeleton";
import { ACTIONS } from "../../context/actions";
import recipesReducer from "../../context/reducers/recipesReducer";
import "./ShowcaseContainer.scss";

function ShowcaseContainer() {
  const initialState = {
    query: "pork",
    recipes: [],
    error: null,
    loading: true,
    favourites: [],
  };

  const [state, dispatch] = useReducer(recipesReducer, initialState);

  useEffect(() => {
    const fetchRecipes = async (query) => {
      try {
        const url = `${import.meta.env.VITE_BASE_URL}${query}`;
        const response = await fetch(url);

        if (response.status >= 400) {
          throw new Error("HELLO NTANDO MAYUTS!!!");
        }

        // console.log(state.query);
        const recipes = await response.json();

        console.log("FETCHED DATA AGAIN!!!");

        dispatch({ type: ACTIONS.SET_RECIPES, payload: recipes });
        dispatch({ type: ACTIONS.SET_ERROR, payload: null });
      } catch (err) {
        dispatch({ type: ACTIONS.SET_RECIPES, payload: [] });
        dispatch({ type: ACTIONS.SET_ERROR, payload: err.message });
        console.error(err.message);
      } finally {
        dispatch({ type: ACTIONS.SET_LOADING, payload: false });
      }
    };

    fetchRecipes(state.query);
  }, []);

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

  if (state.error) return <h1>{state.error}</h1>;

  return (
    <div className="showcaseContainer">
      {state.loading ? skeletonList : recipesList}
    </div>
  );
}

export default ShowcaseContainer;
