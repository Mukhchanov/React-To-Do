import '../styles/tasklist.css';
import TaskShow from './TaskShow';

function TaskList({ tasks, onDelete, onEdit }) {

    const renderedTasks = tasks.map((task) => {
        return <TaskShow onEdit={onEdit} onDelete={onDelete} key={task.id}  task={task} />
    });

    return(
        <div className='tasklist col-12'>
            {renderedTasks}
        </div>
    )
};

export default TaskList;