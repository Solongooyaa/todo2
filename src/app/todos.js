// import React, { useState } from "react";

// const TaskApp = () => {
//   // State to hold tasks
//   const [todos, setTodos] = useState([]);
//   const [input, setInput] = useState(""); // Input value for task name
//   const [status, setStatus] = useState("To do"); // Task status
//   const [modalVisible, setModalVisible] = useState(false); // Modal visibility for adding a task
//   const [count, setCount] = useState(0); // For counting the tasks (or any other counter)

//   // Add a task to the list
//   const addTodo = () => {
//     setModalVisible(true);
//   };

//   const saveTodo = () => {
//     if (input) {
//       setTodos([...todos, { name: input, status }]); // Add new task
//       setInput(""); // Clear input
//       setStatus("To do"); // Reset status to "To do"
//       setModalVisible(false); // Close the modal
//     }
//   };

//   // Change task status
//   const editStatus = (index) => {
//     const newStatus = prompt(
//       "Change your status (To do, In progress, Done, Blocked)"
//     );
//     if (["To do", "In progress", "Done", "Blocked"].includes(newStatus)) {
//       const updatedTodos = todos.map((todo, i) =>
//         i === index ? { ...todo, status: newStatus } : todo
//       );
//       setTodos(updatedTodos);
//     }
//   };

//   // Edit task name
//   const editName = (index) => {
//     const newName = prompt("Edit task name:");
//     if (newName) {
//       const updatedTodos = todos.map((todo, i) =>
//         i === index ? { ...todo, name: newName } : todo
//       );
//       setTodos(updatedTodos);
//     }
//   };

//   // Delete a task
//   const deleteOne = (index) => {
//     const updatedTodos = todos.filter((_, i) => i !== index);
//     setTodos(updatedTodos);
//   };

//   // Delete all tasks
//   const deleteAll = () => {
//     setTodos([]);
//   };

//   // Count the number of "Done" tasks
//   const countDone = () => {
//     return todos.filter((todo) => todo.status === "Done").length;
//   };

//   return (
//     <div className="task-app">
//       <div className="header">
//         <button onClick={() => setCount(count + 1)}>Click</button>
//         <button onClick={() => setCount(count - 1)}>Click</button>
//         <button onClick={addTodo}>Add Task</button>
//         <button onClick={deleteAll}>Delete All</button>
//         <p>Tasks Done: {countDone()}</p>
//       </div>

//       <div className="task-container">
//         {["To do", "In progress", "Done", "Blocked"].map((status) => (
//           <div key={status} className={`${status.toLowerCase()}-tasks`}>
//             <h2>{status}</h2>
//             <div className="tasks">
//               {todos
//                 .filter((todo) => todo.status === status)
//                 .map((todo, index) => (
//                   <div key={index} className="todo-item">
//                     <div className="task-circle"></div>
//                     <p>{todo.name}</p>
//                     <h5>Status: {todo.status}</h5>
//                     <img
//                       src="edit.png"
//                       alt="edit"
//                       onClick={() => editStatus(index)}
//                     />
//                     <img
//                       src="delete.png"
//                       alt="delete"
//                       onClick={() => deleteOne(index)}
//                     />
//                   </div>
//                 ))}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Modal to add a new task */}
//       {modalVisible && (
//         <div className="modal">
//           <div className="modal-content">
//             <input
//               type="text"
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               placeholder="Enter task name"
//             />
//             <select value={status} onChange={(e) => setStatus(e.target.value)}>
//               <option value="To do">To do</option>
//               <option value="In progress">In progress</option>
//               <option value="Done">Done</option>
//               <option value="Blocked">Blocked</option>
//             </select>
//             <button onClick={saveTodo}>Save</button>
//             <button onClick={() => setModalVisible(false)}>Cancel</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TaskApp;
