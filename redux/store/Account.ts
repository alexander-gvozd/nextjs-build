import { createStore, combineReducers, applyMiddleware } from "redux";
import UserReducer from "../reducers/User";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  combineReducers({
    user: UserReducer,
  }),
  {
    user: {
      userId: 0,
      name: "",
      email: "",
    },
  },
  composeWithDevTools(applyMiddleware())
);

export default store;
