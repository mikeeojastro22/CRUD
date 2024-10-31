import { useState } from 'react';
import './App.css';
import data from './assets/task-list.json';
import AddTask from './components/AddTask';

function App() {

  const [tasks, setTasks] = useState(data); // data is an array of objects/tasks
  const [count, setCount] = useState(tasks.length);

  const handleTasks = (newTask) => {
    // newTask = user input which we will get from the AddTask Component
    // newCount = updating for id
    let newCount = count + 1;
    setCount(newCount);
    // [...prevTasks, newTask] = spread operator - creating a new array that contains the previous tasks and the newly created task
    setTasks((prevTasks) => [...prevTasks, newTask]);
  }

  const handleDeleteTask = (taskId) => {
    // filter - matches the condition then it will return the element if the condition is true. This will create a new array
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  }

  return (
    <div className="App">
      {
        tasks.map((task) => {
          return (
            <div key={task.id}> 
              <span>{task.task_name}</span>
              <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
            </div>
          );
        })
      }

      <AddTask handleAddTasks={handleTasks} newId={count} />
    </div>
  );
}

export default App;
