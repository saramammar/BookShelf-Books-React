import React from 'react'
import BooksInShelf from './BooksInShelf'

function BookShelfs({ books, onChangeShelf }) {

    const currentlyReadingBooks = books.filter(book => book.shelf === "currentlyReading");
    const wantToReadBooks = books.filter(book => book.shelf === "wantToRead");
    const readBooks = books.filter(book => book.shelf === "read");

    return (
        <div className="list-books-content">
            <div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading</h2>
                    <BooksInShelf shelfBooks={currentlyReadingBooks} onChangeShelf={onChangeShelf} />
                </div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Want to Read</h2>
                    <BooksInShelf shelfBooks={wantToReadBooks} onChangeShelf={onChangeShelf} />
                </div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Read</h2>
                    <BooksInShelf shelfBooks={readBooks} onChangeShelf={onChangeShelf} />
                </div>
            </div>
        </div>
    )
}

export default BookShelfs
