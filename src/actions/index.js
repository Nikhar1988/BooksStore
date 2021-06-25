
const booksLoaded = (newBooks) => {
  return {
    type: 'FETCH_BOOKS_SUCCESS',
    payload: newBooks
  };
};

const bookRequested = () => {
  return {
    type: 'FETCH_BOOK_REQUEST'
  };
};
const bookError = (error) => {
  return {
    type: 'FETCH_BOOKS_FAILURE',
    payload: error
  };
};

const bookAddedToCart = (bookId) => {
  return {
    type: 'BOOK_ADDED_TO_CART',
    payload: bookId
  }
}

const bookRemoveToCart = (bookId) => {
  return {
    type: 'BOOK_REMOVE_TO_CART',
    payload: bookId
  }
}

const allBookRemoveToCart = (bookId) => {
  return {
    type: 'ALL_BOOK_REMOVE_TO_CART',
    payload: bookId
  }
}

const fetchBooks = (bookstoreService, dispatch) => () => {
  dispatch(bookRequested());
  bookstoreService.getBooks()
    .then((data) => dispatch(booksLoaded(data)))
    .catch((error) => dispatch(bookError(error)));
}

export {
  fetchBooks,
  bookAddedToCart,
  bookRemoveToCart,
  allBookRemoveToCart
};
