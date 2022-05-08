import { itemsInterface } from '../../interfaces';
import { setCategory, setShoes, setSortBy } from './actions';

export const setSortByAction = (name: any) => ({
  type: setSortBy,
  payload: name,
});

export const setCategoryAction = (items: any) => ({
  type: setCategory,
  payload: items,
});

export const setShoesActions = (items: itemsInterface[]) => ({
  type: setShoes,
  payload: items,
});

export const fetchShoes = () => ({});
