import { configureStore } from '@reduxjs/toolkit';
import bakeryReducer from './Reducers';
import { thunk } from 'redux-thunk';

const bakeryStore = configureStore({
  reducer: bakeryReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default bakeryStore;
