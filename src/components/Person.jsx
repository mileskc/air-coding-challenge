import React from 'react'
import './Person.css'

const Person = (props) => {
  return (
    <div className="person">
      <img className="person-avatar" alt="avatar" src={props.person.avatar} />
      <div className="person-text">
        <p className="person-name">{props.person.name}</p>
        <p className="person-desc">{props.person.description}</p>
      </div>
    </div>
  )
}

export default Person