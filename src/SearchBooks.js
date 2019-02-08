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
  clearResults = () => {
    this.setState({ results: [] })
  }
  processResponse = (response) => {
    const results = (response.error === undefined) ? response : []
    return results.map((b) => this.props.books.find((book) => book.id === b.id) || b)
  }
  searchBooks = (query) => {
    const q = query.trim()

    // dont query server if there is no query string
    q.length &&
    BooksAPI.search(q)
      .then((response) => {
        this.setState({ results: this.processResponse(response) });
      })
      .catch(this.clearResults)

    // if no query, empty state
    !q.length && this.clearResults()
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
