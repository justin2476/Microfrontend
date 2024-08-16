import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';  // This could be a combination of slices

const store = configureStore({
  reducer: rootReducer,
});

export default store;
