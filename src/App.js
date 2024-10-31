import { useState } from 'react';
import './App.css';
import data from './assets/task-list.json';
import AddTask from './components/AddTask';

function App() {

  const [tasks, setTasks] = useState(data); // data is an array of objects/tasks
  const [count, setCount] = useState(tasks.length);

  const handleTasks = (newTask) => {
  }

  const handleDeleteTask = (taskId) => {

  }

  return (
    <div className="App">
      {
        tasks.map((task) => {
          return (
            <div key={task.id}> 
              <span>{task.task_name}</span>
            </div>
          );
        })
      }

    </div>
  );
}

export default App;
