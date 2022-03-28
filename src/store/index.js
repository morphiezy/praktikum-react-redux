import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { configureStore,combineReducers } from "@reduxjs/toolkit";
import { reducer as todoReducer } from "./todoSlice";


const persistConfig = {
  key: "todo",
  version:1,
  storage,
};


const reducers = combineReducers({todo : todoReducer})
const persistedReducer = persistReducer(persistConfig, reducers);


export default configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
