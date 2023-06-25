import { createContext, useContext, useReducer } from "react";
import queryReducer from "../reducers/queryReducer";

const QueryContext = createContext(null);

function QueryContextProvider({ children }) {
  const initialState = {
    query: "beef",
  };

  const [state, queryDispatch] = useReducer(queryReducer, initialState);

  const value = {
    query: state.query,
    queryDispatch,
  };

  return (
    <QueryContext.Provider value={value}>{children}</QueryContext.Provider>
  );
}

export default QueryContextProvider;
export const useQueryContext = () => useContext(QueryContext);
