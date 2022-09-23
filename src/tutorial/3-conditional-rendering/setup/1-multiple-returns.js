import React, { useState, useEffect } from 'react'
const url = 'https://api.github.com/users/ayomid_'

const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState('default user')

  const getUser = async () => {
    try {
      const response = await fetch(url)
      if (response.status >= 200 && response.status <= 299) {
        const user = await response.json()
        setUser(user)
        setIsLoading(false)
        console.log('hello')
      } else {
        console.log('hello')
        setIsLoading(false)
        setIsError(true)
        throw new Error(response.statusText);
      }
    } catch (error) {}
    // console.log(user)
  }

  useEffect(() => {
    getUser()
  }, [])
  if (isLoading) {
    return <h2> Loading...</h2>
  }
  if (isError)
    return (
      <div>
        <h2>multiple returns</h2>
      </div>
    )
  return (
    <div>
      <h2>{user.message}</h2>
    </div>
  )
}

export default MultipleReturns
