import './App.css'
import {useState} from "react";
import Task from "./Task/Task";

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

  return (
      <div className="app">
          <form>
              <input type="text"/>
              <button type={"submit"}>Add</button>
          </form>
          {tasks.map((task) => (
              <Task key={task.id}
                    taskName={task.taskName}
                    removeTask={() => removeTask(task.id)} />
          ))}
      </div>
  )
};

export default App
