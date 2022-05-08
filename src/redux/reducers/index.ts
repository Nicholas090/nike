import { combineReducers } from '@reduxjs/toolkit';
import { filters } from './filter';
import { shoes } from './shoes';

const rootReducer = combineReducers({
  filters: filters,
  shoes: shoes,
});

export default rootReducer;
