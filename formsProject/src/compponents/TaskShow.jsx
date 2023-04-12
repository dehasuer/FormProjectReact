import React from "react";

const TaskShow = ({task , onDelete}) => {

    const handleDeleteClick = ( ) => {
        onDelete(task.id)
    }
 
  return <div className="task-show">
    <h3>Göreviniz</h3>
    <p>{task.title}</p>
    <h3>Yapılacaklar</h3>
    <p>{task.taskDesc}</p>
    <div>
        <button className="delete-button" onClick={handleDeleteClick}>Sil</button>
        <button className="edit-button" >Güncelle</button>
    </div>
  </div>;
};

export default TaskShow;
