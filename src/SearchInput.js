import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SearchInput extends Component {
  static propTypes = {
    searchBooks: PropTypes.func.isRequired
  }
  state = {
    query: ''
  }
  handleChange = (event) => {
    const query = event.target.value
    this.setState({ query: event.target.value });
    this.props.searchBooks(query)
  }
  render() {
    const { query } = this.state
    return (
      <div className="search-books-input-wrapper">
        <input
          type="text"
          placeholder="Search by title or author"
          value={query}
        	onChange={this.handleChange}
        />
      </div>
    )
  }
}

export default SearchInput
