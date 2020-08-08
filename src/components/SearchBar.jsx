import React from 'react'

const SearchBar = (props) => {

  return (
    <div className="search-bar">
      <input onChange={props.handleChange} />
    </div>
  )
}

export default SearchBar