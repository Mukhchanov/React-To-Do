import { useState } from "react";
import './styles/app.css';
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";

function App() {

    const [tasks, setTasks] = useState([]);

    const deleteTaskById = (id) => {
        const updatedTasks = tasks.filter((task) => {
            return task.id !== id;
        });
        setTasks(updatedTasks);
    };

    const editTaskById = (id, newTitle) => {
        const updatedTasks = tasks.map((task) => {
            if(task.id === id) {
                return { ...task, title: newTitle }
            }
            return task;
        });

        setTasks(updatedTasks);
    };

    const createTask = (title) => {
        const updatedTasks = [
            ...tasks,
            {
                id: Math.round(Math.random() * 9999),
                title
            }
        ];
        setTasks(updatedTasks);
    };
     
    return(
        <div className="app col-12">
            <TaskCreate onCreate={createTask} />
            <TaskList onEdit={editTaskById} tasks={tasks} onDelete={deleteTaskById} />
        </div>
    )
};

export default App;