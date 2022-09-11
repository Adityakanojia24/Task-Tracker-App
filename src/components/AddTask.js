import React,{ useState } from "react";

const AddTask = ({onAdd}) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState(new Date());
  const [reminder, setReminder] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("hello!! Please add a task");
      return;
    }
    try {
      
      onAdd({ text, day, reminder });
    } catch (error) {
      console.log(error);
    }
    setText("");
    setDay("");
    setReminder(false);
  };
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label
        style={{
          marginLeft: '.12rem',
          fontSize: '20px',
          fontfamily: 'Times New Roman (serif)' ,
          color: '#86c232',
        }}
        >  Task</label>
        <input
          type="text"
          placeholder="AddTask"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        
        <label
         style={{
          marginLeft: '.12rem',
          fontSize: '20px',
          fontfamily: 'Times New Roman (serif)' ,
          color: '#86c232',
        }}
        >Day & Time</label>
        <input
          type="datetime-local"
          placeholder="Add Day & Time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label
        style={{
          marginLeft: '.12rem',
          fontSize: '20px',
          fontfamily: 'Times New Roman (serif)' ,
          color: '#86c232',
        }}
        >Set Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
