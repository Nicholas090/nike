import { ADD_SHOES_CART, SET_TOTAL_COUNT, SET_TOTAL_PRICE } from '../actions/actions';

interface userState {
  items: any;
  totalPrice: number;
  totalCount: number;
}

interface actionsI {
  type: string;
  payload?: any;
}

const initialState: userState = {
  items: [],
  totalPrice: 0,
  totalCount: 0,
};

export const cart = (state: userState = initialState, action: actionsI) => {
  switch (action.type) {
    case SET_TOTAL_PRICE:
      return {
        ...state,
        totalPrice: action.payload,
      };
    case SET_TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.payload,
      };
    case ADD_SHOES_CART:
      return {
        ...state,
        items: {
          [action.payload.id]: !state.items[action.payload.id]
            ? []
            : [...state.items[(action.payload, action.payload)]],
        },
      };
    default:
      return state;
  }
};
