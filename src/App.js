import Header from "./components/Header";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import Footer from "./components/Footer";
import About from "./components/About";
import './index.css';
import Socialfollow from "./components/socialfollow";



import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
      // console.log();
    };
    getTasks();
    console.log(tasks);

  }, []);

  //Fetch tasks
  const fetchTasks = async (id) => {
    // const res= await fetch ('http://localhost:5000/tasks/${id}')
    const res = await axios.get("/tasks");
    // const data= await res.json()
    return res.data.data;
  };

  //Delete task
  const deleteTask = async (id) => {
    console.log(id);
    const res = await axios.delete(`/tasks/${id}`);
    console.log(res);
    setTasks(tasks.filter((task) => task._id !== id));
  };
  //Add Task
  const addTask = async (task) => {
    const res = await axios.post("/tasks", { ...task });
    console.log(res);
    //  const res = await fetch ('http://localhost:5000/tasks',{
    //   method: 'POST',
    //   headers:{
    //     'Content-type':'application/json',

    //   },
    //   body: JSON.stringify(task),
    //  })
    //  const data = await res.json()
    setTasks([...tasks, res.data.newData]);

    //   const id = Math.floor(Math.random()*10000)+1
    // const newTask = {id,...task}
    // setTasks([...tasks, newTask])
  };

  //TOGGLE REMINDER
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTasks(id);
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    const res = await fetch("http://localhost:5000/tasks/${id}", {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updTask),
    });
    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };
  return (
    
    <div className="bg-image">
      <div className="container">
        <Header
        
          title="TASK TRACKER"
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        {showAddTask && <AddTask onAdd={addTask} />}
        {tasks.length !== 0 ? (
          <Tasks
            tasks={tasks}
            onDelete={deleteTask}
            onToggle={toggleReminder}
          />
        ) : (<p
          style={{
            // width:'300px', 
            height:'30px',
        marginLeft: '3.5rem',
           fontSize: '20px',
           color: 'red',
           
           align:'centre'
         }}>
          " NO TASK TO SHOW - ARE YOU ON REST TODAY "</p>
        )}
        <Footer />
        <Socialfollow/>
      </div>
    // </div>
  );
};

export default App;
