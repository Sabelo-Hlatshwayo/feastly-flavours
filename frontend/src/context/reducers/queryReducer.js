import { ACTIONS } from "../actions";

function queryReducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_QUERY: {
      return { query: action.payload };
    }

    default: {
      throw new Error(`Error: unknown action ${action.type}`);
    }
  }
}

export default queryReducer;
