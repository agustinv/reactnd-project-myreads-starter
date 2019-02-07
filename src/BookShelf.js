import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BooksList from './BooksList'

class BookShelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired
  }

  render() {
    const { books, title } = this.props

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <BooksList books={books} />
        </div>
      </div>
    )
  }
}

export default BookShelf
