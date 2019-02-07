import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }

  render() {
    const { books } = this.props
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <div className="list-books-content">
          <div>
            <BookShelf books={books.filter(book => book.shelf === "currentlyReading")} title="Currently Reading" />
            <BookShelf books={books.filter(book => book.shelf === "wantToRead")} title="Want to Read" />
            <BookShelf books={books.filter(book => book.shelf === "read")} title="Read" />
          </div>
        </div>

        <Link to="/search" className="open-search">
          <button>Add a book</button>
        </Link>
      </div>
    )
  }
}

export default ListBooks
