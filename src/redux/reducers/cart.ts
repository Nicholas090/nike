import { setSortBy } from '../actions/actions';

interface userState {
  category: number;
  sortBy: string;
  error: null | string;
}

interface actionsI {
  type: string;
  payload?: any;
}

const initialState: userState = {
  category: 0,
  sortBy: 'popular',
  error: null,
};

export const cart = (state: userState = initialState, action: actionsI) => {
  switch (action.type) {
    case setSortBy:
      return {
        ...state,
        sortBy: action.payload,
      };
    default:
      return state;
  }
};
