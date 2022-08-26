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
  }

  const handleChange = (event)=> {}

  const removeTask = (index) => {
    let taskList = [...tasks]
    taskList.splice(index,1)
    manageTasks(taskList)
  }

  return (
    <div className="list">
      <Input handleChange = {handleChange} 
             addTask = {addTask} />
      <Tasks tasks={tasks} 
             removeTask = {removeTask}/>
    </div>
  )
}

export default TodoList