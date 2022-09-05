// import React from 'react'
// import { useState } from "react"
import Task from './Task'


const Tasks = ({onDelete,onToggle,tasks}) => {
//   const[tasks,setTasks]=useState([
//     {
//        id:1,
//    text:'Doctors appointment',
//    day:'Feb 5th at 5:30 pm',
//    reminder: true,},
//    {
//        id:2,
//     text:'Meeting',
//     day:'Feb 6th at 6:30 pm',
//     reminder: true,},
//    {
//        id:3,
//     text:'Shopping',
//     day:'Feb 7th at 7:30 pm',
//     reminder: true,}    

// ])
//Delete task
// const deleteTask=(id)=>{
//   console.log('delete',id)}

 
    return (
    <>
      { tasks.map((task,index)=>(
      <Task key={index} task={task}
      onDelete={onDelete}
      onToggle={onToggle}/>
      ))} 
    </>
  )
  }

export default Tasks

