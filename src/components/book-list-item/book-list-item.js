import React, { Fragment } from 'react';
import './book-list-item.css';

const BookListItem = ({ book }) => {
  const { title, author } = book;
  return (
    <div className="book-list item">
      <span>{title}</span>
      <span>{author}</span>
    </div>
  );
};

export default BookListItem;