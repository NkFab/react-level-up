import { combineReducers } from 'redux';
import { courseReducer } from './courseReducer';

export const rootReducer = combineReducers({
  courses: courseReducer,
});
