import React from 'react'
import Book from './Book'

function SearchBooksResults({ books, onChangeShelf }) {
    return (
        <div className="search-books-results">
            <ol className="books-grid">
                {books && books.length > 0 && books.map(book => (
                    <li key={book.id}>
                        <Book book={book} onChangeShelf={onChangeShelf} />
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default SearchBooksResults
