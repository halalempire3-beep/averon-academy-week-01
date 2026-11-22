function Dashboard({ tasks }) {
  const totalTasks = tasks.length;

  const completedTasks = tasks.filter((task) => task.completed).length;

  const pendingTasks = totalTasks - completedTasks;

  return (
    <section className="dashboard">
      <div className="stat-card">
        <h3>{totalTasks}</h3>
        <p>Total Tasks</p>
      </div>

      <div className="stat-card">
        <h3>{pendingTasks}</h3>
        <p>Pending</p>
      </div>

      <div className="stat-card">
        <h3>{completedTasks}</h3>
        <p>Completed</p>
      </div>
    </section>
  );
}

export default Dashboard;