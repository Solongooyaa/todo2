"use client";
import { useState } from "react";
import "./todo.css";
import Todo from "./todo.js";

// export default function Page() {
//   const [isOpen, setIsOpen] = useState(false);
//   const openModal = () => {
//     setIsOpen(true);
//   };
//   const closeModal = () => {
//     setIsOpen(false);
//   };
//   return (
//     <div>
//       {" "}
//       <button onClick={openModal}>add</button>{" "}
//       {isOpen && (
//         <div>
//           {" "}
//           <div>
//             {" "}
//             <button onClick={closeModal}>close</button> <input></input>{" "}
//           </div>{" "}
//         </div>
//       )}{" "}
//     </div>
//   );
// }
// import React, { useState } from "react";
export default function Home() {
  const [todos, setTodos] = useState([]); // Todo жагсаалт
  const [newTask, setNewTask] = useState({ name: "", status: "" }); // Шинэ даалгавар
  const saveTodo = () => {
    if (newTask.name && newTask.status) {
      setTodos([...todos, newTask]);
      closeModal();
    } else {
      alert("Please fill in both fields");
    }
  };
  setNewTask({ name: "", status: "" });
  setIsOpen(false);

  // console.log(todos);
  const renderTasks = (status) => {
    return todos
      .filter((todo) => todo.status === status)
      .map((todo, index) => (
        <div key={index} className="todo-item">
          <p>name: {todo.name}</p>
          <p>Status: {todo.status}</p>
          <div className="tasks">{renderTasks(status)}</div>
        </div>
      ));
  };

  return (
    <div>
      <Todo saveTodo={saveTodo} />
      <div className="container">
        {["todo", "in-progress", "done", "blocked"].map((status) => (
          <div key={status} className="todos">
            <div className="todos-head">
              <div className={`circle-${status}`}></div>
              <h2 className="todo-title">{status.replace("-", " ")}</h2>
            </div>
          </div>
        ))}
        <select
          value={newTask.status}
          onChange={(e) => setNewTask({ ...newTask, status: e.target.value })}
        >
          <option value="">Select status</option>
          <option value="todo">ToDo</option>
          <option value="in-progress">In-Progress</option>
          <option value="done">Done</option>
          <option value="blocked">Blocked</option>
        </select>
        <button onClick={saveTodo} className="submit">
          Submit
        </button>
      </div>
      {/* <TodoApp /> */}
    </div>
  );
}
