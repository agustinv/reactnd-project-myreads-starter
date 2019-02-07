import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BooksList from './BooksList'


class SearchBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    updateBookShelf: PropTypes.func.isRequired
  }
  state = {
    query: '',
    results: []
  }
  handleChange = (event) => {
    const query = event.target.value.trim()
    this.setState({ query: event.target.value, results: [] });
    query.length &&
      BooksAPI.search(query)
        .then((response) => {
          response.error === undefined && this.setState({ results: response });
        })
  }
  render() {
    const { query, results } = this.state
    const { books, updateBookShelf } = this.props

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
         			onChange={this.handleChange}
              />
          </div>
        </div>
        <div className="search-books-results">
          <BooksList books={results} updateBookShelf={updateBookShelf} />
        </div>
      </div>
    )
  }
}

export default SearchBooks
