import flushMicrotasks from '@testing-library/react/dist/flush-microtasks'
import React, { useState } from 'react'
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('')
  const [isError , setIsError] = useState(false)
  // for or (||) one value has to be truthy
  // operation reads from left to right
  const firstValue = text || 'hello world'

  // for and (&&) all values must be truthy
  // orperation reads from left to right
  const secondValue = text && 'hello world'

  return (
    <> 
      <h1> { text || 'john doe' }</h1>
      <button className="btn" onClick={() =>{setIsError(!isError)}}>toggle error</button>
      {isError && <h1>Error...</h1>}
      {isError ? <h1>Error...</h1> : <h1>false</h1>}
    </>
  )
}

export default ShortCircuit
