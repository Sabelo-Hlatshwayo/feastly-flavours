import { useContext, createContext, useEffect, useReducer } from "react";
import recipesReducer from "../reducers/recipesReducer";
import { ACTIONS } from "../actions";

const RecipesContext = createContext(null);

function RecipesContextProvider({ children }) {
  const initialState = {
    recipes: null,
    error: null,
    loading: true,
  };

  const [state, dispatch] = useReducer(recipesReducer, initialState);

  useEffect(() => {
    const fetchRecipes = async (query) => {
      try {
        const url = `${import.meta.env.VITE_BASE_URL}${query}`;
        const response = await fetch(url);

        console.log(response);

        if (response.status >= 400) {
          throw new Error("HELLO NTANDO MAYUTS!!!");
        }

        const recipes = await response.json();

        dispatch({ type: ACTIONS.SET_RECIPES, payload: recipes });
        dispatch({ type: ACTIONS.SET_ERROR, payload: null });
      } catch (err) {
        dispatch({ type: ACTIONS.SET_RECIPES, payload: null });
        dispatch({ type: ACTIONS.SET_ERROR, payload: err.message });
        console.error(err.message);
      } finally {
        dispatch({ type: ACTIONS.SET_LOADING, payload: false });
      }
    };

    fetchRecipes("pork");
  }, []);

  const value = {
    recipes: state.recipes,
    error: state.error,
    loading: state.loading,
  };

  return (
    <RecipesContext.Provider value={value}>{children}</RecipesContext.Provider>
  );
}

export default RecipesContextProvider;
export const useRecipes = () => useContext(RecipesContext);
