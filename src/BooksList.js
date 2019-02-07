import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

function BooksList(props) {
  const { books, updateBookShelf } = props
  return  <ol className="books-grid">
            {books.map((book) => <Book key={book.id} book={book} updateBookShelf={updateBookShelf} />)}
          </ol>

}

BooksList.propTypes = {
  books: PropTypes.array.isRequired,
  updateBookShelf: PropTypes.func.isRequired
}

export default BooksList
