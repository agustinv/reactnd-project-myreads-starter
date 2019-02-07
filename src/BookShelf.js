import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BooksList from './BooksList'

class BookShelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    updateBookShelf: PropTypes.func.isRequired
  }

  render() {
    const { books, title, updateBookShelf } = this.props

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <BooksList books={books} updateBookShelf={updateBookShelf} />
        </div>
      </div>
    )
  }
}

export default BookShelf
