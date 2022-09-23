import React, { useState } from 'react'

const UseStateBasics = () => {
  // console.log(useState(1))
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value,handler)

  const [text, setText] = useState('random title')
  const changeText = () => {
    if (text === 'random title') {
      setText('hello world')
    } else {
      setText('random title')
    }
  }
  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button className='btn' onClick={changeText}>
        changeText
      </button>
    </React.Fragment>
  )
}

export default UseStateBasics
