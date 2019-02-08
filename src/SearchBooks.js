import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BooksList from './BooksList'
import SearchInput from './SearchInput'

class SearchBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    updateBookShelf: PropTypes.func.isRequired
  }
  state = {
    results: []
  }
  searchBooks = (query) => {
    const q = query.trim()
    q.length &&
    BooksAPI.search(q)
      .then((response) => {
        response.error === undefined && this.setState({ results: response });
        response.error !== undefined && this.setState({ results: [] });
      })
      .catch(() => this.setState({ results: [] }))
    !q.length && this.setState({ results: [] })
  }
  render() {
    const { results } = this.state
    const { books, updateBookShelf } = this.props

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>
          <SearchInput searchBooks={this.searchBooks} />
        </div>
        <div className="search-books-results">
          <BooksList books={results} updateBookShelf={updateBookShelf} />
        </div>
      </div>
    )
  }
}

export default SearchBooks
