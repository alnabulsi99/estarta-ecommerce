import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import thunk from "redux-thunk";
import AllReducers from "./AllReducers";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cartReducer"], // Add any reducer you want to persist in the local storage
};

const persistedReducer = persistReducer(persistConfig, AllReducers);

const store = createStore(
  persistedReducer,
  {},
  applyMiddleware(thunk)
);

const persistor = persistStore(store);

export { store, persistor };
