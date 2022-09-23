import React, { useState } from 'react'
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(firstName, email)

    if (firstName && email){
      const person = {id : new Date().getTime(), firstName, email };
      console.log(person ,"details")
      setPeople([...people, person])
      setFirstName('');
      setEmail('');
    }
  }
  return (
    <>
      <article>
        <form onSubmit={handleSubmit} className='form'>
          <div className='form-control'>
            <label htmlFor='firstNmae'>Name :</label>
            <input
              type='text'
              id='firstName'
              name='firstname'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email :</label>
            <input
              type='text'
              id='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type='submit'>add person</button>
        </form>
        {people.map((person) => {
          const {id, email, firstName}= person;
          return <div key={id} className="item">
            <h4>{firstName}</h4>
            <p>{email}</p>
          </div>
        })}
      </article>
    </>
  )
}

export default ControlledInputs
