import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const TodoItem = ({ todo }) => {
  const [isCompleted, setIsCompleted] = useState(() => {
    // Retrieve the completed status from local storage
    const savedStatus = localStorage.getItem(`todo-${todo.id}-completed`);
    return savedStatus ? JSON.parse(savedStatus) : todo.completed;
  });
  const [showPopup, setShowPopup] = useState(false);
  const [todoDetails, setTodoDetails] = useState(null);

  // Save the completed status to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem(`todo-${todo.id}-completed`, JSON.stringify(isCompleted));
  }, [isCompleted, todo.id]);

  const handleCheckboxChange = () => {
    const newStatus = !isCompleted;
    setIsCompleted(newStatus);
    toast.success(`Task marked as ${newStatus ? "complete" : "incomplete"}`, {
      duration: 2000,
    });

    // Update the todoDetails status if the popup is open
    if (showPopup) {
      setTodoDetails((prevDetails) => ({
        ...prevDetails,
        completed: newStatus,
      }));
    }
  };

  const handleTodoClick = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/todos/${todo.id}`
      );
      // Update the todoDetails with the current checkbox state
      setTodoDetails({
        ...response.data,
        completed: isCompleted, 
      });
      setShowPopup(true);
    } catch (error) {
      toast.error("Failed to fetch todo details");
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={handleCheckboxChange}
          className="w-5 h-5"
        />
        <span
          onClick={handleTodoClick}
          className={`cursor-pointer ${
            isCompleted
              ? "text-gray-500 line-through" 
              : "text-gray-800"
          }`}
        >
          {todo.title}
        </span>
      </div>

      
      {showPopup && todoDetails && (
        <>
         
          <div
            className="fixed inset-0 z-40"
            style={{ pointerEvents: "none" }} // Disable interaction with the background
          />

          
<div
  className="fixed inset-0 flex items-center justify-center z-50"
  style={{ pointerEvents: "auto" }}
>
  <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center"> 
    <h3 className="text-xl font-bold mb-4">Todo Details</h3>
    <p><strong>ID:</strong> {todoDetails.id}</p>
    <p><strong>Title:</strong> {todoDetails.title}</p>
    <p>
      <strong>Status:</strong> {todoDetails.completed ? "Completed" : "Pending"}
    </p>
    <button
      onClick={() => setShowPopup(false)}
      className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
    >
      Close
    </button>
  </div>
</div>

        </>
      )}
    </div>
  );
};

export default TodoItem;
