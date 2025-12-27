import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import syncStorage from '@/store/syncStore';

import country from '@/features/country/countrySlice';

const rootReducer = combineReducers({
  country
});

const persistConfig = {
  key: 'root',
  storage: syncStorage,
  whitelist: ['']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
