function TaskItem({ task, onToggle, onDelete, onEdit }) {
  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <div className="task-info">
        <h3>{task.title}</h3>

        <p>Due: {task.dueDate || "No deadline"}</p>

        <span className={`priority ${task.priority.toLowerCase()}`}>
          {task.priority} Priority
        </span>
      </div>

      <div className="task-actions">
        <button onClick={() => onEdit(task.id)}>
          Edit
        </button>

        <button onClick={() => onToggle(task.id)}>
          {task.completed ? "Undo" : "Complete"}
        </button>

        <button
          className="delete-btn"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;