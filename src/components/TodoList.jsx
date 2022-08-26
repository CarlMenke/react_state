import React, {useState} from 'react'
import Tasks from './Tasks'
import Input from './Input'

const TodoList = () => {
  
  const [tasks,manageTasks] = useState([
    'do dishes',
    'sweep the floor',
    'do something',
    'send videos'
  ])

  const addTask = () =>{
    let myList = [...tasks, 'My Task'];
    manageTasks(myList)
    console.log(tasks)
  }

  const handleChange = (event)=> {}

  return (
    <div className="list">
      <Input handleChange = {handleChange} 
             addTask = {addTask} />
      <Tasks tasks={tasks} />
    </div>
  )
}

export default TodoList