import { useState } from 'react';
import '../styles/taskcreate.css';

function TaskCreate({ onCreate }) {

    const [title, setTitle] = useState('');

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(title);
        setTitle('');
    };

    return(
        <div className='header d-flex flex-column justify-content-center align-items-center col-12'>
            <div className='header__box'>
                <h1 className='header__box-text'>Get Things Done!</h1>
            </div>
            <div className='header__form col-6'>
                <form onSubmit={handleSubmit} className='d-flex justify-content-center'>
                    <input value={title} onChange={handleChange} className='input' />
                    <button className='create-btn'>Crate Task</button>
                </form>
            </div>
        </div>
    )
};

export default TaskCreate;