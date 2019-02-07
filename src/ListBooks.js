import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'

class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }

  render() {
    const { books } = this.props
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <div className="list-books-content">
          <div>
            <BookShelf books={books} title="Currently Reading" />
            <BookShelf books={books} title="Want to Read" />
            <BookShelf books={books} title="Read" />
          </div>
        </div>

        <div className="open-search">
          <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
        </div>
      </div>
    )
  }
}

export default ListBooks
