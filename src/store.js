import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import Logger from "redux-logger";
import rootReducer from "./reducers";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["notes"],
};

const middlewares = [Logger];
// if (process.env.NODE_ENV === "developemnt") {
//   middlewares.push(Logger);
// }

export const store = createStore(
  persistReducer(persistConfig, rootReducer),
  composeWithDevTools(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store);
