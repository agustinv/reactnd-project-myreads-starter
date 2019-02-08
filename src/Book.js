import React from 'react'
import PropTypes from 'prop-types'
import BookAuthors from './BookAuthors'

function Book(props) {
  const { book, updateBookShelf } = props
  const thumbnail = book.imageLinks !== undefined ? book.imageLinks.thumbnail : ''
  return  <li>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${thumbnail}` }}></div>
                <div className="book-shelf-changer">
                  <select value={book.shelf} onChange={(event) => updateBookShelf(book, event.target.value)} >
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
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
