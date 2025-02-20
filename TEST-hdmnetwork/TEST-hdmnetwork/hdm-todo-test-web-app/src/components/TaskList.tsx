import React from 'react';
import { useTasks } from '../hooks/useTasks';

const TaskList: React.FC = () => {
const { tasks, loading, error, deleteTask } = useTasks();

if (loading) return <p>Chargement...</p>;
if (error) return <p>Erreur: {error.message}</p>;

return (
    <ul>
    {tasks.map((task) => (
        <li key={task.id}>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <button onClick={() => deleteTask(task.id)}>Supprimer</button>
        </li>
    ))}
    </ul>
);
};

export default TaskList;
