import {combineReducers, configureStore} from '@reduxjs/toolkit';
import counterSlice from './slice';
import categoriesProductsSlice from './categoriesProductsSlice';

const store = configureStore({
  reducer: combineReducers({
    counter: counterSlice,
    categoriesProducts: categoriesProductsSlice,
  }),
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
