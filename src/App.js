import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './components/ListBooks'
import SearchBooks from './components/SearchBooks'
import {Route, Routes} from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  async componentDidMount() {
    const books = await BooksAPI.getAll();
    this.setState(() => ({ books }))
  }

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      BooksAPI.getAll().then(books => this.setState(() => ({ books })))
    })
  }

  render() {
    const { books } = this.state;

    return (
      <div className="app">
        <Routes>
          <Route path="/" element={<ListBooks books={books}
                                              onChangeShelf={this.updateShelf} />} />
          <Route path="/search" element={<SearchBooks shelfBooks={books} 
                                                      onChangeShelf={this.updateShelf} />} />
        </Routes>
      </div>
    )
  }
}

export default BooksApp
