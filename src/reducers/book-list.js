const updateBookList = (state, action) => {     // функция принимает state and action
  
    if (state === undefined) {
      return {
        books: [],
        loading: true,
        error: null
      }
    }
    
    switch (action.type) {
      case 'FETCH_BOOK_REQUEST':
        return {
          books: [],
          loading: true,
          error: null
        }
  
      case 'FETCH_BOOKS_SUCCESS':
        return {
          books: action.payload,
          loading: false,
          error: null
        };
  
      case 'FETCH_BOOKS_FAILURE':
        return {
          books: [],
          loading: false,
          error: action.payload
        };
        default: 
          return state.bookList;
    }
  }

  export default updateBookList;