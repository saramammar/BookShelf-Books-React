import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div>
            <p>Page Not Found: <strong>404</strong></p>
            <Link to='/'>Back to home</Link>
        </div>
    )
}

export default NotFound
