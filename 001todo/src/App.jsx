import { useState } from 'react'

import './App.css'

function App() {
 const [tasks,setTasks]=useState([])
 const[newTask,setNewTask]=useState('')

 const addTask=()=>{
  if (newTask.trim()){
    setTasks([...tasks,{id:Date.now(),text:newTask,completed:false}]);
setNewTask('')
  }
 };


const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };


 const removeTask=(id)=>{
  setTasks(tasks.filter((task)=>task.id!==id));
 }

  return (
    <>
<div className="App">
      <h1>To-Do App</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter a new task"
      />
      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id} className={task.completed ? "completed" : ""}>
            <span onClick={() => toggleTaskCompletion(task.id)}>
              {task.text}
            </span>
            <button onClick={() => removeTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default App
