import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers, configureStore} from '@reduxjs/toolkit';

import {persistStore, persistReducer} from 'redux-persist';

import LoadSlice from './loading';
import AuthSlice from './auth';
import OtherSlice from './others';

const rootReducer = combineReducers({
  load: LoadSlice,
  auth: AuthSlice,
  other: OtherSlice,
});

const persistConfig = {
  key: 'social-influencer',
  storage: AsyncStorage,
  whiteList: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export default store;
