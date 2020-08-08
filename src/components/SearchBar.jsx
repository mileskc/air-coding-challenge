import React from 'react'
import './SearchBar.css'

const SearchBar = (props) => {

  return (
    <div className="search-bar">
      <input
        autofocus
        className="search-input"
        placeholder="Type a name..."
        onChange={props.handleChange}
      />
    </div>
  )
}

export default SearchBar