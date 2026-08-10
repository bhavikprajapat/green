import { configureStore, combineReducers } from "@reduxjs/toolkit";

import authReducer from "./Reduxslice/authSlice";
import themeReducer from "./Reduxslice/themeSlice";
import volunteerReducer from "./Reduxslice/volunteerSlice";

import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import donorReducer from "./Reduxslice/donorSlice";

const rootReducer = combineReducers({
    login: authReducer,
    theme: themeReducer,
    volunteer: volunteerReducer,
      donor: donorReducer,

});

const persistConfig = {
    key: "root",
    storage,
     whitelist: ["theme"],
};

const persistedReducer = persistReducer(
    persistConfig,
    rootReducer
);

const store = configureStore({
    reducer: persistedReducer,

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistor = persistStore(store);

export default store;