import { combineReducers } from "redux";
import { reducer as FormReducer } from "redux-form";
import CakesReducer from "./reducers_cakes";

const rootReducer = combineReducers({
  cakes: CakesReducer,
  form: FormReducer
});

export default rootReducer;
