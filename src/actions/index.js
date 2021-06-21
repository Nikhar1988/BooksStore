
const booksLoaded = (newBooks) => {
  return {
    type: 'BOOKS_LOADED',
    payload: newBooks
  };
};

const bookRequested = () => {
  return {
    type: 'BOOK_REQUESTED'
  };
};

export {
  booksLoaded,
  bookRequested
};
