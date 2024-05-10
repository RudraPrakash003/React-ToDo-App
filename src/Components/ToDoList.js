import React, { useState } from "react";
import TodoItem from "./ToDoItem";
import '../Static/ToDoList.css'

function ToDoList(){
    
    const [tasks, SetTasks] = useState([]);
    const [newTask, SetNewTask] = useState("");
  
    const handleInputChange = (event) => {
      SetNewTask(event.target.value);
    };
  
    const addTodo = () => {
      if (newTask.trim() !== '') {
        SetTasks([...tasks, {title: newTask, completed: false }]);
        SetNewTask('');
      }
    };
  
    const deleteTodo = (index) => {
      SetTasks(tasks.filter((tasks, i) => i !== index));
    };
  
    const updateTodo = (index, newTitle) => {
      if (newTitle.trim()!==''){
        const updatedtasks = [...tasks];
        updatedtasks[index].title = newTitle;
        SetTasks(updatedtasks);

      }
    };
  
    const toggleComplete = (index) => {
      const updatedtasks = [...tasks];
      updatedtasks[index].completed = !updatedtasks[index].completed;
      SetTasks(updatedtasks);
    };
    return (
        <div className="todo-list-container">
          <h1 className="todo-list-header">Todo List</h1>
            <input
              className="todo-input"
              type="text"
              value={newTask}
              onChange={handleInputChange}
              placeholder="Enter your task"
            />
            <button className="add-button" onClick={addTodo}>Add</button>
            <table className="todo-table">
              <tbody>
                {tasks.map((tasks, index) => (
                  <TodoItem
                    key={index}
                    tasks={tasks}
                    index={index}
                    toggleComplete={toggleComplete}
                    updateTodo={updateTodo}
                    deleteTodo={deleteTodo}
                  />    
                ))}
              </tbody>
            </table>
        </div>
    );
}
    

export default ToDoList