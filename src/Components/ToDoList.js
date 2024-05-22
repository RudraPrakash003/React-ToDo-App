import React, { useState } from "react";
import TodoItem from "./ToDoItem";

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const handleInputChange = (event) => {
        setNewTask(event.target.value);
    };

    const addTodo = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, { title: newTask, completed: false }]);
            setNewTask('');
        }
    };

    const deleteTodo = (index) => {
        setTasks(tasks.filter((task, i) => i !== index));
    };

    const updateTodo = (index, newTitle) => {
        if (newTitle.trim() !== '') {
            const updatedTasks = [...tasks];
            updatedTasks[index].title = newTitle;
            setTasks(updatedTasks);
        }
    };

    const toggleComplete = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        setTasks(updatedTasks);
    };

    return (
        <div className="max-w-lg mx-auto p-5 font-sans">
            <h1 className="text-center mb-5 text-2xl">ToDo App</h1>
            <div className="flex mb-5">
                <input
                    className="w-full mr-2 p-2 border"
                    type="text"
                    value={newTask}
                    onChange={handleInputChange}
                    placeholder="Enter your task"
                />
                <button className="p-2 bg-green-500 text-white" onClick={addTodo}>Add</button>
            </div>
            <div className="flex flex-col space-y-2">
                {tasks.map((task, index) => (
                    <TodoItem
                        key={index}
                        tasks={task}
                        index={index}
                        toggleComplete={toggleComplete}
                        updateTodo={updateTodo}
                        deleteTodo={deleteTodo}
                    />
                ))}
            </div>
        </div>
    );
}

export default ToDoList;
