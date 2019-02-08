import React from 'react'
import PropTypes from 'prop-types'
import BookAuthors from './BookAuthors'
import BookShelfChanger from './BookShelfChanger'
import BookImage from './BookImage'

function Book(props) {
  const { book, updateBookShelf } = props
  return  <li>
            <div className="book">
              <div className="book-top">
                <BookImage imageLinks={book.imageLinks} />
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
