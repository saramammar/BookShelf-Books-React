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
          let sameBook = shelfBooks.find(shelfBook => searchBook.id === shelfBook.id);
          sameBook && (searchBook.shelf = sameBook.shelf);
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
