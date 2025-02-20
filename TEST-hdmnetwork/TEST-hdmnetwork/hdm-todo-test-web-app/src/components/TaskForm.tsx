import React, { useState } from 'react';
import { useTasks } from '../hooks/useTasks';

interface TaskFormProps {
task?: { id: number; title: string; description: string };
onSave: () => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ task, onSave }) => {
const { createTask, updateTask } = useTasks();
const [taskData, setTaskData] = useState(task || { title: '', description: '' });

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTaskData((prevData) => ({ ...prevData, [name]: value }));
};

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (task) {
    await updateTask(task.id, taskData);
    } else {
    await createTask(taskData);
    }
    onSave();
};

return (
    <form onSubmit={handleSubmit}>
    <input
        type="text"
        name="title"
        value={taskData.title}
        onChange={handleChange}
        placeholder="Titre"
    />
    <textarea
        name="description"
        value={taskData.description}
        onChange={handleChange}
        placeholder="Description"
    />
    <button type="submit">{task ? 'Mettre à jour' : 'Créer'} la tâche</button>
    </form>
);
};

export default TaskForm;
