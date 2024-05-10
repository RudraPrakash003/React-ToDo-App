import React, { useState } from 'react';
import '../Static/ToDoList.css';

function TodoItem({ tasks, index, toggleComplete, updateTodo, deleteTodo }) {

    const [editMode, setEditMode] = useState(false);
    const [newTitle, setNewTitle] = useState(tasks.title);

    const handleInputChange = (event) => {
        setNewTitle(event.target.value);
    };

    const handleUpdateClick = () => {
        updateTodo(index, newTitle);
        setEditMode(false);
    };

    const handleCancelClick = () => {
        setNewTitle(tasks.title);
        setEditMode(false);
    }
    return (
        <tr>
            <td>
                <input
                    type="checkbox"
                    checked={tasks.completed}
                    onChange={() => toggleComplete(index)}
                />
            </td>
            <td>
                {editMode ? (
                    <input
                    className="edit-input"
                        type="text"
                        value={newTitle}
                        onChange={handleInputChange}
                        // autoFocus
                    />
                    ) : (
                    <span className={tasks.completed ? "completed-task" : ""}>
                        {tasks.title}
                    </span>
                )}
            </td>
            <td className="button-container">
                {editMode ? (
                    <div className="edit-actions">
                        <button className="update-button" onClick={handleUpdateClick}>Update</button>
                        <button className="cancel-button" onClick={handleCancelClick}>Cancel</button>
                    </div>
                    ) : (
                        <button className="edit-button" onClick={() => setEditMode(true)}>Edit</button>
                )}
                <button className="delete-button" onClick={() => deleteTodo(index)}>Delete</button>
            </td>
        </tr>
    );
}

export default TodoItem;