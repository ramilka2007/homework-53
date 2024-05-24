import './App.css'
import {useState} from "react";
import Task from "./Task/Task";
import {Tasks} from "./types";
import AddTaskForm from "./AddTaskForm/AddTaskForm";

const App = () => {
    const [tasks, setTasks] = useState([
        {taskName: 'Do homework', id: 'd1'},
        {taskName:'Buy milk', id: 'b1'},
        {taskName:'Walk with dog', id: 'w1'},
    ]);

    const removeTask = (id: string) => {
        setTasks((prevTasks) => {
            return prevTasks.filter((task) => task.id !== id);
        });
    };

    const createTask = (newTask: Tasks) => {
        setTasks((prevTasks) => {
            return [...prevTasks, newTask];
        });
    };

  return (
      <div className="app">
          <AddTaskForm onSubmit={createTask}/>
          {tasks.map((task) => (
              <Task key={task.id}
                    taskName={task.taskName}
                    removeTask={() => removeTask(task.id)} />
          ))}
      </div>
  )
};

export default App
