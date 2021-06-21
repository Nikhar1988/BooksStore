import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';
import ErrorIndicator from '../error-indicator';
import { withBookstoreService } from '../hoc';
import { booksLoaded, bookRequested, bookError } from '../../actions';
import { compose } from '../../utils';
import Spinner from '../spinner';
import './book-list.css';

class BookList extends Component {

  componentDidMount() {

    const { bookstoreService, booksLoaded, bookRequested, bookError } = this.props;
    bookRequested(); 
    bookstoreService.getBooks()
      .then((data) => booksLoaded(data))
      .catch((error) => bookError(error));
  }

  render() {
    const { books, loading, error } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator/>
    }

    return (
      <ul className="book-list">
        {
          books.map((book) => {
            return (
              <li key={book.id}><BookListItem book={book}/></li>
            )
          })
        }
      </ul>
    );
  }
}

const mapStateToProps = ({ books, loading, error }) => {
  return { books, loading, error };
};

const mapDispatchToProps = {
  booksLoaded,
  bookRequested,
  bookError
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);