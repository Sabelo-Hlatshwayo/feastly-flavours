import { ACTIONS } from "../actions";

function favouritesReducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_FAVOURITES: {
      return { ...state, favourites: action.payload };
    }

    default: {
      throw new Error(`Unknown action: ${action.type} `);
    }
  }
}

export default favouritesReducer;
