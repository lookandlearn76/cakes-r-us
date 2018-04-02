import _ from "lodash";
import { FETCH_CAKES, FETCH_CAKE, DELETE_CAKE } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case DELETE_CAKE:
      return _.omit(state, action.payload);
    case FETCH_CAKE:
      return { ...state, [action.payload.id]: action.payload.data };
    case FETCH_CAKES:
      return _.mapKeys(action.payload.data, "id");
    default:
      return state;
  }
}
