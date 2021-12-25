import React from 'react'
import BooksInShelf from './BooksInShelf'

function BookShelfs({ books, onChangeShelf }) {

    const booksInShelf = shelfName => books.filter(book => book.shelf === shelfName);
    const SHELVES = [
        {
          title: 'Currently Reading',
          id: 'currentlyReading'
        },
        {
          title: 'Want To Read',
          id: 'wantToRead'
        },
        {
          title: 'Read',
          id: 'read'
        }
    ];

    return (
        <div className="list-books-content">
            <div>
                {SHELVES.map(shelf => (
                    <div className="bookshelf" key={shelf.id}>
                        <h2 className="bookshelf-title">{ shelf.title }</h2>
                        <BooksInShelf shelfBooks={booksInShelf(shelf.id)} onChangeShelf={onChangeShelf} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BookShelfs
