import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

function BooksList(props) {
  return  <ol className="books-grid">
            {props.books.map((book) => <Book key={book.id} book={book} />)}
          </ol>

}

BooksList.propTypes = {
  books: PropTypes.array.isRequired
}

export default BooksList
