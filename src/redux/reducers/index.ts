import { combineReducers } from '@reduxjs/toolkit';
import { filters } from './filter';
import { shoes } from './shoes';
import { cart } from './cart';

const rootReducer = combineReducers({
  filters,
  shoes,
  cart,
});

export default rootReducer;
