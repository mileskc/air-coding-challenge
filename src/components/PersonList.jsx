import React from 'react'

const PersonList = (props) => {

  let data;
  props.filteredResults ? data = props.filteredResults : data = props.data
  return (
    <>
      {data.map((person, index) => (
        <div key={index}>
          <img alt="avatar" src={person.avatar} />
          <h4>{person.name}</h4>
          <p>{person.description}</p>
        </div>
      ))}
    </>
  )
}

export default PersonList