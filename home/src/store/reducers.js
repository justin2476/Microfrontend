import { combineReducers } from 'redux';
import counterReducer from './counterSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
  // other slices can be added here
});

export default rootReducer;
