// import Task from './Tasks'
import { useState } from 'react'
import {FaTimes} from 'react-icons/fa'

const Task = ({  task,onDelete,onToggle }) => {
  console.log(task.Date);
  // const [date,setDate]=useState(new Date())
  // setDate(task.Date)
  return (
    <div 
    className={`task ${task.reminder && 'reminder'}`}
    onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
    { task.Task}{' '}
      <FaTimes
      style={{
        color:'#86C232',
        cursor:'pointer' }}
        onClick={()=> onDelete(task._id)}
        />
      </h3>
      <p>{task.Date}</p>
    </div>
  )
}

export default Task
