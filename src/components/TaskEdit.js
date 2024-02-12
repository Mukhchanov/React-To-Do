import { useState } from 'react';
import '../styles/taskedit.css';

function TaskEdit({ task, onSubmit }) {

    const [title, setTitle] = useState(task.title);

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(task.id, title);
    };

    return(
            <form onSubmit={handleSubmit} className="edit-form d-flex justify-content-between">
                <input value={title} onChange={handleChange} className="edit-input" />
                <button className="save-button">Save</button>
            </form>
    )
};

export default TaskEdit;