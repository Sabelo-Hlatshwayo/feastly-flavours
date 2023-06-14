import { useContext, createContext, useEffect, useReducer } from "react";

const RecipesContext = createContext(null);

function RecipesContextProvider({ children }) {
  const initialState = {
    recipes: null,
  };

  const [state, dispatch] = useReducer(() => {}, initialState);

  useEffect(() => {
    const fetchRecipes = async (query) => {
      const url = `${import.meta.env.VITE_BASE_URL}${query}`;
      const response = await fetch(url);
      const recipes = await response.json();
      console.log(recipes);
    };

    fetchRecipes("pork");
  }, []);

  const value = {};

  return (
    <RecipesContext.Provider value={value}>{children}</RecipesContext.Provider>
  );
}

export default RecipesContextProvider;
export const useRecipes = () => useContext(RecipesContext);
