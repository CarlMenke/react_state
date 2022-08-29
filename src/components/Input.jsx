import React , { useState } from 'react'

const Input = (props) => {
  
  const [inputValue, setInputValue] = useState('');


  return (
    <div className = 'tasks'>
      <label>Input Tasks Here: </label>
      <input type="text" name="task" />
      <button onClick = {props.addTask}>Add</button>
    </div>
  )
}

export default Input
