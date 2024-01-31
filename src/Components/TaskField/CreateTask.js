import React, { useState } from 'react';
import './CreateTask.css';

const CreateTask = ({ onClose,responsible }) => {
  const [jobTitle, setJobTitle] = useState('');
  const [beganDate, setBeganDate] = useState('');
  const [status, setStatus] = useState('');
  const jobTitlePattern = /^[A-Za-z0-9\s]+$/;

  const handleJobTitleChange = (event) => {
    setJobTitle(event.target.value);
    const newValue = event.target.value;

    // Check if the new value matches the pattern
    if (jobTitlePattern.test(newValue) || newValue === '') {
      setJobTitle(newValue);
    }
  };

  const handleBeganDateChange = (event) => {
    setBeganDate(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleCreateTask = () => {
    // Your logic for creating the task
    console.log('Job Title:', jobTitle);
    console.log('Began Date:', beganDate);
    console.log('Status:', status);

    // Close the CreateTask component
    onClose();
  };

  return (
    <div className="create-task-overlay">
      <div className="create-task-container">
        <h2>Create Task</h2>
        <input
          type="text"
          placeholder={responsible}
          value={jobTitle}
          onChange={handleJobTitleChange}
        />
        <input
          type="date"
          placeholder="Began Date"
          value={beganDate}
          onChange={handleBeganDateChange}
        />
        <label>Status:</label>
        <select value={status} onChange={handleStatusChange}>
          <option value="Process">Process</option>
          <option value="Pending">Pending</option>
          <option value="Complete">Complete</option>
        </select>
        <div className="create-task-buttons">
          <button onClick={handleCreateTask}>Create Task</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;
