import React, { useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";

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
    };
    return (
        <div className="flex items-center justify-between my-2">
            <input
                type="checkbox"
                checked={tasks.completed}
                onChange={() => toggleComplete(index)}
                className="mr-4"
                />
                {editMode ? (
                    <input
                        className="flex-grow mr-2 border p-2"
                        type="text"
                        value={newTitle}
                        onChange={handleInputChange}
                    />
                ) : (
                    <span className={`flex-grow text-lg ${tasks.completed ? "line-through" : ""} mr-2`}>
                        {tasks.title}
                    </span>
                )}

                <div className="flex item-center space-x-3">
                    {editMode ? (
                        <>
                            <div className="relative top-[-5px]">
                                <TiTick role="button" size={30} onClick={handleUpdateClick} />
                            </div>
                            <div className="relative top-[1px]">
                                <ImCross role="button" size={17} onClick={handleCancelClick} />
                            </div>
                        </>
                    ) : (
                        <>
                            <MdEdit role="button" size={23} onClick={() => setEditMode(true)} />
                            <MdDelete role="button" size={23} onClick={() => deleteTodo(index)} />
                        </>
                    )}
                </div>
        </div>
    );
}

export default TodoItem;
