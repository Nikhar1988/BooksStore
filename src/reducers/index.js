
const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [
    {
      id: 1,
      name: 'Book 1',
      count: 3,
      total: 150
    },
    {
      id: 2,
      name: 'Book 2',
      count: 2,
      total: 70
    }
  ],
  orderTotal: 220
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'FETCH_BOOK_REQUEST':
      return {
        ...state,
        books: [],
        loading: true,
        error: null
      }

    case 'FETCH_BOOKS_SUCCESS':
      return {
        ...state,
        books: action.payload,
        loading: false,
        error: null
      };

    case 'FETCH_BOOKS_FAILURE':
      return {
        ...state,
        books: [],
        loading: false,
        error: action.payload
      };
      case 'BOOK_ADDED_TO_CART':
        return {
          
        }

    default:
      return state;
  }
};

export default reducer;
