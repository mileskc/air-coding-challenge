import React from 'react'

const PersonList = (props) => {
  return (
    <>
      {props.data.map(person => (
        <>
          <img alt="avatar" src={person.avatar} />
          <h4>{person.name}</h4>
          <p>{person.description}</p>
        </>
      ))}
    </>
  )
}

export default PersonList