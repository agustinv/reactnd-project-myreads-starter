import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'

class BooksApp extends React.Component {
  state = {
    books: []
  }
  updateBookShelf = (book, shelf) => {
    book.shelf = shelf
    BooksAPI.update(book, shelf)
      .then((response) => {
        book.shelf = shelf
        this.setState((current_state) => ({
          books: [...current_state.books.filter((b) =>b.id !== book.id), book]
        }))
      })
  }
  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }
  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListBooks
            books={this.state.books}
            updateBookShelf={this.updateBookShelf}
          />
        )} />
        <Route path='/search' render={() => (
          <SearchBooks
            books={this.state.books}
            updateBookShelf={this.updateBookShelf}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
