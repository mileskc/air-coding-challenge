import React, { Suspense } from 'react'
const Person = React.lazy(() => import('./Person'))

const PersonList = (props) => {

  let data;
  props.filteredResults ? data = props.filteredResults : data = props.data

  return (
    <>
      {data.map((person, index) => (
        <Suspense fallback={<h1>Loading...</h1>}>
          <Person key={index} person={person} />
        </Suspense>
      ))}
    </>
  )
}

export default PersonList