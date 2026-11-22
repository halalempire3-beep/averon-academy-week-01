import TaskItem from "./TaskItem";

function TaskList({ tasks, onToggle, onDelete, onEdit }) {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <h3>No tasks found!</h3>
        <p>Add a task or try a different search.</p>
      </div>
    );
  }

  return (
    <section className="task-list">
      <h2>My Tasks</h2>

      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </section>
  );
}

export default TaskList;