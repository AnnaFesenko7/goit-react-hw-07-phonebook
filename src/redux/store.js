import {
  itemsReducer,
  filterReducer,
  loadingReducer,
} from './contacts/contacts-reducers';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import logger from 'redux-logger';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  loading: loadingReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});
