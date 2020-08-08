import React, { useState } from 'react'
import PersonList from './PersonList'
import SearchBar from './SearchBar'
import Hero from './Hero'
import { data } from '../data.js'

const Main = () => {

  const [filteredResults, setFilteredResults] = useState()

  const handleChange = (event) => {
    const results = data.filter(person => person.name.toLowerCase().includes(event.target.value.toLowerCase()))
    setFilteredResults(results)
    console.log(event.target.value)
  }
  return (
    <>
      <SearchBar filteredResults={filteredResults} handleChange={handleChange} />
      <Hero />
      <PersonList data={data} filteredResults={filteredResults} />
    </>
  )
}

export default Main