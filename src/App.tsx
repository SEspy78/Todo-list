import React, { ChangeEvent, useState } from "react";
import TodoTask from './Components/TodoTask';
import { ITask } from "./Interface";
import './App.css';

const App: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadLine, setDeadLine] = useState<number>(0);
  const [todo, setTodo] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadLine(Number(event.target.value));
    }
  };

  const addTask = () => {
    if (!task || !deadLine) {
      // Check if task or deadline is empty
      return; // Exit the function if either is empty
    }
  
    const newTask = {
      taskName: task,
      deadLine: deadLine,
    };
    setTodo([...todo, newTask]);
    setTask("");
    setDeadLine(0);
  };

  const completeTask = (taskNameToDelete:string):void =>{
    setTodo(todo.filter((task)=>{
      return task.taskName !=taskNameToDelete
    }))
  }

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
         <input type="text" name="task" placeholder="Add a task" value={task} onChange={handleChange}/>
          <input type="number" name="deadline" value={deadLine} placeholder="Set a deadline (in days)" onChange={handleChange} />
        </div>
        <button onClick={addTask}>Add</button>
      </div>
      <div className="toDoList">
      {todo.map((task:ITask, key:number)=>{
          return <TodoTask key={key} task={task} completeTask={completeTask} />
        })}
      </div>
    </div>
  );
};

export default App;
