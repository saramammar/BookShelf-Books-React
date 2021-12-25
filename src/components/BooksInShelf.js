import React from 'react'
import Book from './Book'

function BooksInShelf({ shelfBooks, onChangeShelf }) {
    return (
        <div className="bookshelf-books">
            <ol className="books-grid">
                {shelfBooks.length > 0 ? (shelfBooks.map(book => (
                    <li key={book.id}>
                        <Book book={book} onChangeShelf={onChangeShelf} />
                    </li>
                ))) : (<p>there is no books</p>)}
            </ol>
        </div>
    )
}

export default BooksInShelf
