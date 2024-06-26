import { ITask } from '../Interface';
interface Props{
  task:ITask;
  completeTask(taskNameToDelete:String):void;
}

const TodoTask= ({task, completeTask}:Props) => {
  return (
  <div className='task'>
    <div className="content">
      <span>{task.taskName}</span>
      <span>{task.deadLine}</span>
    </div>
    <button onClick={()=>{
      completeTask(task.taskName);
    }}>X</button>
  </div>
  );
}

export default TodoTask;