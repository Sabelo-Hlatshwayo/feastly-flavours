import { useContext, createContext, useReducer, useEffect } from "react";
import favouritesReducer from "../reducers/favouritesReducer";
import { ACTIONS } from "../actions";

const FavouritesContext = createContext(null);

function FavouritesContextProvider({ children }) {
  const initialState = {
    favourites: [],
  };

  const [state, favouritesDispatch] = useReducer(
    favouritesReducer,
    initialState
  );

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favourites")) || [];
    favouritesDispatch({ type: ACTIONS.SET_FAVOURITES, payload: favs });
  }, []);

  const value = {
    favourites: state.favourites,
    favouritesDispatch,
  };

  return (
    <FavouritesContext.Provider value={value}>
      {children}
    </FavouritesContext.Provider>
  );
}

export default FavouritesContextProvider;
export const useFavourites = () => useContext(FavouritesContext);
