import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/additem">Add a New Item</Link>
    </div>
  )
}

export default Navbar