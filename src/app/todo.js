import { useState } from "react";

export default function Todo({ saveTodo }) {
  const [isOpen, setIsOpen] = useState(false); // Modal нээх/хаах төлөв

  // Modal нээх/хаах функцууд
  const openModal = () => {
    setIsOpen(true);
    const closeModal = () => {
      setIsOpen(false);
    };
    // saveTodo(isOpen);
    // Шинэ даалгавар хадгалах функц

    // Даалгаврын жагсаалтыг төрөл тус бүрээр буцаах
    return (
      <div>
        <div className="button">
          <button onClick={openModal}>Add task</button>
        </div>

        {/* Modal */}
        {isOpen && (
          <div id="modal" className="modal-open">
            <div className="modal-content">
              <h1>Enter task</h1>
              <input
                type="text"
                value={newTask.name}
                onChange={(e) =>
                  setNewTask({ ...newTask, name: e.target.value })
                }
                placeholder="Task name..."
              />

              <button onClick={closeModal}>Close</button>
            </div>
          </div>
        )}
      </div>
    );
  };
}
