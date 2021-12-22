import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import RootReducer from "./reducers";

export const middlewares = [reduxThunk];

export const createStoreWithMiddleware = applyMiddleware(...middlewares)(
  createStore
);

export const store = createStoreWithMiddleware(RootReducer);
