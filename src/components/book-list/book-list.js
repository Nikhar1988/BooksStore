import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';
import Spinner from '../spinner';
import { withBookstoreService } from '../hoc';
import { booksLoaded, bookRequested } from '../../actions';
import { compose } from '../../utils';

import './book-list.css';

class BookList extends Component {

  componentDidMount() {
    // 1. receive data
    const { bookstoreService, booksLoaded, bookRequested } = this.props;
    bookRequested();
    bookstoreService.getBooks()
      .then((data) => {
        booksLoaded(data);
      });//сейчас она возвращает промис

    // 2. dispacth action to store

  }

  render() {
    const { books, loading } = this.props;

    if (loading) {
      return <Spinner />
    }
    return (
      <ul className="book-list">
        {
          books.map((book) => {
            return (
              <li key={book.id}><BookListItem book={book} /></li>
            )
          })
        }
      </ul>
    );
  }
}

const mapStateToProps = ({ books, loading }) => {
  return { books, loading };
};

const mapDispatchToProps = {
  booksLoaded,
  bookRequested
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);
