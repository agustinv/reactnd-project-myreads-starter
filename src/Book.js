import React from 'react'
import PropTypes from 'prop-types'
import BookAuthors from './BookAuthors'
import BookShelfChanger from './BookShelfChanger'

function Book(props) {
  const { book, updateBookShelf } = props
  const thumbnail = book.imageLinks !== undefined ? book.imageLinks.thumbnail : ''
  return  <li>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${thumbnail}` }}></div>
                <BookShelfChanger book={book} updateBookShelf={updateBookShelf} />
              </div>
              <div className="book-title">{book.title}</div>
              <BookAuthors authors={book.authors} />
            </div>
          </li>
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  updateBookShelf: PropTypes.func.isRequired
}

export default Book
