import React from 'react'
import { data } from '../../../data'

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data)
  const revomeItem = (id) => {
    console.log(document.querySelector('.item'))
    //returns an array that doesnt include the present id passed
    let newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }
  return (
    <>
      {people.map((person) => {
        const {id, name} = person;

        return (
          <div key={id}  className='item'>
            <h4>{name}</h4>
            <button className='btn' onClick={() => revomeItem(id)}>Delete</button>
          </div>
        );
      })}
      <button className='btn' onClick={() =>setPeople([])}>Clear item</button>
    </>
  );
};

export default UseStateArray
