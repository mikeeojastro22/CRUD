import { useState } from "react";

function AddTask(props){
    const { handleAddTasks, newId } = props;

    // declaration for the new task 
    const [toDo, setToDo] = useState('');

    const addTaskHandler = (event) => {
        event.preventDefault();

        const newTaskObject = {
            task_name: toDo,
            id: newId
        }

        handleAddTasks(newTaskObject);
        setToDo('');
    }

    return (
        <div className="addTask">
            <form onSubmit={addTaskHandler}>
                <input value={toDo} placeholder="Add task here" onChange={(event) => setToDo(event.target.value)}></input>
                <button>Add Task</button>
            </form>
        </div>
    );
}

export default AddTask;