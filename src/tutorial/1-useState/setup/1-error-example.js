import React from 'react';

const ErrorExample = () => {
  let title = 'random text';
  const changeText = () => {
    title = "hello people"
    
    console.log(title);
  }
  return <React.Fragment>
    <h2>{title}</h2>
    <button type='button' className='btn' onClick={() =>{changeText()}}>random</button>
  </React.Fragment>
};

export default ErrorExample;
