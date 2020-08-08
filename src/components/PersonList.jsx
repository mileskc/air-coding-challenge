import React from 'react'
import Person from './Person'

const PersonList = (props) => {

  let data;
  props.filteredResults ? data = props.filteredResults : data = props.data

  return (
    <>
      {data.map((person, index) => (
        <Person key={index} person={person} />
      ))}
    </>
  )
}

export default PersonList