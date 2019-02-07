import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

function ListBooks(props) {
  const { books, updateBookShelf } = props
  return  <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>

            <div className="list-books-content">
              <BookShelf
                books={books.filter(book => book.shelf === "currentlyReading")}
                title="Currently Reading"
                updateBookShelf={updateBookShelf} />
              <BookShelf
                books={books.filter(book => book.shelf === "wantToRead")}
                title="Want to Read"
                updateBookShelf={updateBookShelf} />
              <BookShelf
                books={books.filter(book => book.shelf === "read")}
                title="Read"
                updateBookShelf={updateBookShelf} />
            </div>

            <Link to="/search" className="open-search">
              <button>Add a book</button>
            </Link>
          </div>
}

ListBooks.propTypes = {
  books: PropTypes.array.isRequired,
  updateBookShelf: PropTypes.func.isRequired
}
export default ListBooks
