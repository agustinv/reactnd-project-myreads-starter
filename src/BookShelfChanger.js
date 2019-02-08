import React from 'react'
import PropTypes from 'prop-types'

function BookShelfChanger(props) {
  const { book, updateBookShelf } = props
  return  <div className="book-shelf-changer">
            <select value={book.shelf} onChange={(event) => updateBookShelf(book, event.target.value)} >
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
}

BookShelfChanger.propTypes = {
  book: PropTypes.object.isRequired,
  updateBookShelf: PropTypes.func.isRequired
}

export default BookShelfChanger
