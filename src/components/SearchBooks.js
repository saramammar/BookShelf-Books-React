import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SearchBooksResults from './SearchBooksResults'
import * as BooksAPI from '../BooksAPI'

function SearchBooks({ onChangeShelf }) {
    const [ query, setQuery ] = useState('');
    const [ books, setBooks ] = useState('');

    const onSearch = (e) => {
      setQuery(e.target.value);
      if (e.target.value) {
        BooksAPI.search(e.target.value).then(books => setBooks(books))
      } else {
        setBooks('')
      }
    }

    return (
        <div className="search-books">
            <div className="search-books-bar">
              <Link to="/" className="close-search">Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" value={query} onChange={onSearch}/>

              </div>
            </div>
            <SearchBooksResults books={books} onChangeShelf={onChangeShelf} />
          </div>
    )
}

export default SearchBooks
