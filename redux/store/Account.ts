import { createStore, combineReducers, applyMiddleware } from "redux";
import UserReducer from "../reducers/User";
import { composeWithDevTools } from "redux-devtools-extension";

export default function getStore(preloadedState: any) {
  return createStore(
    combineReducers({
      user: UserReducer,
    }),
    preloadedState,
    composeWithDevTools(applyMiddleware())
  );
}
