import React from "react";
import { useState } from "react";
const TaskCreate = ({onCreate , task , taskFormUpdate}) => {

    const [title, setTitle] = useState(task ? task.title : "");
    const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : "");
    

    const handleChange = (event) => {
        setTitle(event.target.value)
    }

    const handleTaskChange = (event) => {
        setTaskDesc(event.target.value)
    }
    
    const handleSubmit = (event) => {
        event.preventDefault() //sayfanın yenilenmesini engellemek için
        
        if(taskFormUpdate) {
            onUpdate(task.id , title , taskDesc)
        }else {
            onCreate(title,taskDesc)
        }
        setTitle("") //buttona basıldıktan sonra içerisini boşalmak için
        setTaskDesc("") //buttona tıkladıktan sonra içerisini boşaltamak için
    }

  return <div>{taskFormUpdate ? <div className="task-update">
  <h3>Lütfen task düzenleyiniz</h3>
  <form className="task-form">
      <label className="task-label">Başlık düzenleyiniz</label>
      <input value={title} onChange={handleChange} className="task-input" />
      <label className="task-label">Task düzenleyiniz</label>
      <textarea value={taskDesc} onChange={handleTaskChange} className="task-input" rows="5"></textarea>
      <button onClick={handleSubmit} className="update-button">Düzenle</button>
  </form>
</div> : <div className="task-create">
    <h3>Lütfen task ekleyiniz</h3>
    <form className="task-form">
        <label className="task-label">Başlık</label>
        <input value={title} onChange={handleChange} className="task-input" />
        <label className="task-label">Task giriniz</label>
        <textarea value={taskDesc} onChange={handleTaskChange} className="task-input" rows="5"></textarea>
        <button onClick={handleSubmit} className="task-button">Oluştur</button>
    </form>
  </div>}</div>
  
};

export default TaskCreate;
