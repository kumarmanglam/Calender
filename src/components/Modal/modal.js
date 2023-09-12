import React, { useState } from "react";
import "./modalStyle.css";

function Modal({ onClose, onAddFestival }) {
  //Using state to double bind inputs
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  //Function to handle submit and send data to parent components
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent default form behavior

    if (title && description) {
      onAddFestival({ title, description });
      setTitle("");
      setDescription("");
      onClose();
    } else {
      alert("Please fill in both fields!");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Add Festival</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </label>
          <label>
            Description:
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </label>
          <div className="modal-actions">
            <button type="submit" className="btn">
              Add
            </button>
            <button type="button" onClick={onClose} className="btn">
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;
