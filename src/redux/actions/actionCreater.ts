import axios from 'axios';
import { Dispatch } from 'redux';

import { itemsInterface } from '../../interfaces';
import { ADD_SHOES_CART, setCategory, setShoes, setSortBy, SET_LOADED } from './actions';

export const setSortByAction = ({ type, order }: any) => ({
  type: setSortBy,
  payload: { type, order },
});

export const setCategoryAction = (items: any) => ({
  type: setCategory,
  payload: items,
});

export const setShoesActions = (items: itemsInterface[]) => ({
  type: setShoes,
  payload: items,
});

export const fetchShoes = (sortBy: any, category: number) => (dispatch: Dispatch) => {
  dispatch(setLoaded(false));

  axios
    .get(
      `http://localhost:3001/shoes?${category !== null ? `category=${category}` : ''}&_order=${
        sortBy.type
      }&_order=${sortBy.order}`,
    )
    .then(({ data }) => {
      dispatch(setShoesActions(data));
    });
};

export const setLoaded = (payload: boolean) => ({
  type: SET_LOADED,
  payload: payload,
});

export const addShoesToCartActions = (shoesObj: any) => ({
  type: ADD_SHOES_CART,
  payload: shoesObj,
});
