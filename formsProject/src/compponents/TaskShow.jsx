import React from "react";
import { useState } from "react";
import TaskCreate from "./TaskCreate";

const TaskShow = ({task , onDelete , onUpdate}) => {

    const [showEdit, setShowEdit] = useState(false);
    

    const handleDeleteClick = ( ) => {
        onDelete(task.id)
    }

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    }

    const handleSubmit = (id , updatedTitle , updatedTaskDesc) => {
      setShowEdit(false)
      onUpdate()

    }
 
  return <div className="task-show">

    {showEdit ? <TaskCreate task={task} taskFormUpdate={true}  onUpdate={handleSubmit}/> :  <div>    <h3>Göreviniz</h3>
    <p>{task.title}</p>
    <h3>Yapılacaklar</h3>
    <p>{task.taskDesc}</p>
    <div>
        <button className="delete-button" onClick={handleDeleteClick}>Sil</button>
        <button onClick={handleEditClick} className="edit-button" >Güncelle</button>
    </div></div>}



  </div>;
};

export default TaskShow;
