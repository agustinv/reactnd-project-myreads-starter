import React from 'react'
import PropTypes from 'prop-types'
import BooksList from './BooksList'

function BookShelf(props) {
  const { books, title, updateBookShelf } = props
  return  <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
              <BooksList books={books} updateBookShelf={updateBookShelf} />
            </div>
          </div>
}

BookShelf.propTypes = {
  books: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  updateBookShelf: PropTypes.func.isRequired
}

export default BookShelf
