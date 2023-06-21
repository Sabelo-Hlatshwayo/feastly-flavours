import Favourites from "../../pages/Favourites/Favourites";
import { ACTIONS } from "../actions";

function recipesReducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_RECIPES: {
      return { ...state, recipes: action.payload };
    }

    case ACTIONS.SET_ERROR: {
      return { ...state, error: action.payload };
    }

    case ACTIONS.SET_LOADING: {
      return { ...state, loading: action.payload };
    }

    case ACTIONS.ADD_FAVOURITE: {
      console.log(action.payload);
      return { ...state, favourites: action.payload };
    }

    case ACTIONS.REMOVE_FAVOURITE: {
      return { ...state, favourites: action.payload };
    }

    default: {
      throw new Error(`Unknown action: ${action.type} `);
    }
  }
}

export default recipesReducer;
