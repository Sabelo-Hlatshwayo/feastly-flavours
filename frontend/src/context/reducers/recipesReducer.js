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

    default: {
      throw new Error(`Unknown action: ${action.type}`);
    }
  }
}

export default recipesReducer;
