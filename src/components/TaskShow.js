import { useState } from 'react';
import TaskEdit from './TaskEdit';
import '../styles/taskshow.css';

function TaskShow({ task, onDelete, onEdit }) {

    const [showEdit, setShowEdit] = useState(false);

    const handleDeleteClick = () => {
        onDelete(task.id);
    };

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    };

    const handleSubmit = (id, newTitle) => {
        setShowEdit(false);
        onEdit(id, newTitle);
    };

    let content = <p>{task.title}</p>;
    if(showEdit) {
        content = <TaskEdit onSubmit={handleSubmit} task={task} />;
    };

    return(
        <div className='col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 d-flex justify-content-center'>
            <div className='taskshow d-flex flex-column justify-content-between'>
            <div className='taskshow__text-box d-flex justify-content-center col-12'>
                <div className='taskshow__text'>
                    {content}
                </div>
            </div>
            <div className='taskshow__btns col-12 d-flex justify-content-between'>
                <button onClick={handleEditClick} className='taskshow__edit'>Edit</button>
                <button onClick={handleDeleteClick} className='taskshow__remove'>Delete</button>
            </div>
        </div>
        </div>
    )
};

export default TaskShow;