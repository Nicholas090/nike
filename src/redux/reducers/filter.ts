import { setCategory, setSortBy } from '../actions/actions';

type OrderType = 'asc' | 'desc';
type SortByI = {
  type: string;
  order: OrderType;
};

interface userState {
  category: number | null;
  sortBy: SortByI;
  error: null | string;
}

interface actionsI {
  type: string;
  payload?: any;
}

const initialState: userState = {
  category: null,
  sortBy: {
    type: 'popular',
    order: 'desc',
  },
  error: null,
};

export const filters = (state: userState = initialState, action: actionsI) => {
  switch (action.type) {
    case setSortBy:
      return {
        ...state,
        sortBy: action.payload,
      };
    case setCategory:
      return {
        ...state,
        category: action.payload,
      };
    default:
      return state;
  }
};
