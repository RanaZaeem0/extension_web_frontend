import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"; // Local storage for persistence
import { persistReducer, persistStore } from "redux-persist";
import authSlice from "../reducer/authSlice";

const persistConfig = {
  key: "auth",
  storage,
};

// Wrap authReducer with persistReducer
const persistedAuthReducer = persistReducer(persistConfig, authSlice.reducer);

const store = configureStore({
  reducer: {
    auth: persistedAuthReducer, // Use persisted reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Avoid serialization warnings
    }),
});

export const persistor = persistStore(store);

// Define RootState type
export type RootState = ReturnType<typeof store.getState>;

// Define AppDispatch type
export type AppDispatch = typeof store.dispatch;

export default store;
