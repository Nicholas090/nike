import { itemsInterface } from '../../interfaces';
import { setShoes, SET_LOADED } from '../actions/actions';

interface userState {
  items: itemsInterface[];
  isLoaded: boolean;
  error: null | string;
}

interface actionsI {
  type: string;
  payload?: any;
}

const initialState: userState = {
  items: [],
  isLoaded: false,
  error: null,
};

export const shoes = (state: userState = initialState, action: actionsI) => {
  switch (action.type) {
    case setShoes:
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      };
    case SET_LOADED:
      return {
        ...state,
        isLoaded: action.payload,
      };
    default:
      return state;
  }
};
