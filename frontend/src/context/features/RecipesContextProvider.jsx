import { useContext, createContext, useEffect, useReducer } from "react";
import recipesReducer from "../reducers/recipesReducer";
import { ACTIONS } from "../actions";

const RecipesContext = createContext(null);

function RecipesContextProvider({ children }) {
  const initialState = {
    recipes: null,
  };

  const [state, dispatch] = useReducer(recipesReducer, initialState);

  useEffect(() => {
    const fetchRecipes = async (query) => {
      const url = `${import.meta.env.VITE_BASE_URL}${query}`;
      const response = await fetch(url);
      const recipes = await response.json();
      dispatch({ type: ACTIONS.SET_RECIPES, payload: recipes });
    };

    fetchRecipes("pork");
  }, []);

  const value = {
    recipes: state.recipes,
  };

  return (
    <RecipesContext.Provider value={value}>{children}</RecipesContext.Provider>
  );
}

export default RecipesContextProvider;
export const useRecipes = () => useContext(RecipesContext);
