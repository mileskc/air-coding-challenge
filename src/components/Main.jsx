import React from 'react'
import PersonList from './PersonList'
import SearchBar from './SearchBar'
import Hero from './Hero'
import { data } from '../data.js'

const Main = () => {
  return (
    <>
      <SearchBar />
      <Hero />
      <PersonList data={data} />
    </>
  )
}

export default Main