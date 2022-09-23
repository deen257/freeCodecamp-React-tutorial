import React, { useState } from 'react'
import { data } from '../../../data'

// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people, setPeople] = useState(data)
  const handleClick = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id)
    })
  }

  return (
    <>
      <section className='container'>
        <h3>prop Drilling</h3>
        <List people={people} setPeople={setPeople} handleClick={handleClick} />
      </section>
    </>
  )
}
const List = ({ people, handleClick }) => {
  
  return (
    <>
      {people.map((person) => {
        const { id, name } = person
        return (
          <div className='item' key={id}>
            <h2>{name}</h2>
            <button
              onClick={() => {
                handleClick(id)
              }}
              className='btn'
            >
              {' '}
              remove
            </button>
          </div>
        )
      })}
    </>
  )
}

export default PropDrilling
