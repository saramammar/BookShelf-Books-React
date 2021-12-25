import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SearchBooksResults from './SearchBooksResults'
import * as BooksAPI from '../BooksAPI'

function SearchBooks({ shelfBooks, onChangeShelf }) {
    const [ query, setQuery ] = useState('');
    const [ books, setBooks ] = useState('');

    const onSearch = async (e) => {
      setQuery(e.target.value);
      if (e.target.value) {
        const booksResult = await BooksAPI.search(e.target.value);
        booksResult.length > 0 && booksResult.forEach(searchBook => {
          let obj = shelfBooks.filter(shelfBook => searchBook.id == shelfBook.id);
          if (obj.length > 0) {
            searchBook.shelf = obj[0].shelf;
          }
        })
        setBooks(booksResult)
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
