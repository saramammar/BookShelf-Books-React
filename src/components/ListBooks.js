import React from 'react'
import { Link } from 'react-router-dom'
import BookShelfs from './BookShelfs'

function ListBooks({ books, onChangeShelf }) {
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <BookShelfs books={books} onChangeShelf={onChangeShelf} />
            <div className="open-search">
                <Link to="/search">Add a book</Link>
            </div>
        </div>
    )
}

export default ListBooks
