  // src/hooks/useTasks.ts
  import { useState, useEffect } from 'react';
  import axios from 'axios';
  import { API_URL } from '../config/apiConfig';

  export const useTasks = () => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchTasks = async () => {
        try {
          const response = await axios.get(API_URL);
          setTasks(response.data);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };
      fetchTasks();
    }, []);

    const createTask = async (taskData: { title: string; description: string }) => {
      try {
        const response = await axios.post(API_URL, taskData);
        setTasks((prevTasks) => [...prevTasks, response.data]);
      } catch (error) {
        setError(error);
      }
    };

    const updateTask = async (taskId: number, taskData: { title: string; description: string }) => {
      try {
        const response = await axios.patch(`${API_URL}/${taskId}`, taskData);
        setTasks((prevTasks) =>
          prevTasks.map((task) =>
            task.id === taskId ? response.data : task
          )
        );
      } catch (error) {
        setError(error);
      }
    };

    const deleteTask = async (taskId: number) => {
      try {
        await axios.delete(`${API_URL}/${taskId}`);
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
      } catch (error) {
        setError(error);
      }
    };

    return { tasks, loading, error, createTask, updateTask, deleteTask };
  };
