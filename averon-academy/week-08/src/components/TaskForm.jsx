import { useState } from 'react';

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('Medium');

  function handleSubmit(event) {
    event.preventDefault();

    if (!title.trim()) {
      alert('Please enter a task name.');
      return;
    }

    onAddTask({
      id: Date.now(),
      title: title.trim(),
      dueDate,
      priority,
      completed: false,
    });

    setTitle('');
    setDueDate('');
    setPriority('Medium');
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <h2>Add a New Task</h2>

      <input
        type="text"
        placeholder="What do you need to do?"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <label>Due Date</label>
      <input
        type="date"
        value={dueDate}
        onChange={(event) => setDueDate(event.target.value)}
      />

      <label>Priority</label>
      <select
        value={priority}
        onChange={(event) => setPriority(event.target.value)}
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;