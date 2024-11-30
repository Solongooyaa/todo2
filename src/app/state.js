import { useState } from "react";
const [count, setCount] = useState(0);

const countplus = () => {
  setCount(count + 1);
};
const countb = () => {
  setCount(count - 1);
};
return (
  <div>
    <button onClick={countplus}> click</button>
    <button onClick={countb}> click</button>
    <button className="add-task">Add task</button>
    <div className="todo-container">
      <div id="todo" className="todos">
        Todo
      </div>
      <div id="in-progress" className="todos">
        In-progress
      </div>
      <div id="done" className="todos">
        Done
      </div>
      <div id="block" className="todos">
        Block
      </div>
    </div>
  </div>
);
