import { ACTIONS } from "../actions";

function recipesReducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_RECIPES: {
      return { ...state, recipes: action.payload };
    }
  }
}

export default recipesReducer;
