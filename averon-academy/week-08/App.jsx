import { useState, useEffect } from "react";

import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Filters from "./components/Filters";

function App() {
  const [tasks, setTasks] = useState(() => {
    try {
      const savedTasks = localStorage.getItem("studentTasks");
      return savedTasks ? JSON.parse(savedTasks) : [];
    } catch {
      return [];
    }
  });

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("studentTasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask(newTask) {
    setTasks((previousTasks) => [newTask, ...previousTasks]);
  }

  function toggleTask(id) {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  function deleteTask(id) {
    setTasks((previousTasks) =>
      previousTasks.filter((task) => task.id !== id)
    );
  }

  function editTask(id) {
    const taskToEdit = tasks.find((task) => task.id === id);
    const newTitle = window.prompt("Edit task name:", taskToEdit.title);

    if (newTitle && newTitle.trim()) {
      setTasks((previousTasks) =>
        previousTasks.map((task) =>
          task.id === id
            ? { ...task, title: newTitle.trim() }
            : task
        )
      );
    }
  }

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      filter === "all" ||
      (filter === "pending" && !task.completed) ||
      (filter === "completed" && task.completed);

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="app">
      <Header />

      <main className="container">
        <Dashboard tasks={tasks} />

        <TaskForm onAddTask={addTask} />

        <Filters
          search={search}
          setSearch={setSearch}
          filter={filter}
          setFilter={setFilter}
        />

        <TaskList
          tasks={filteredTasks}
          onToggle={toggleTask}
          onDelete={deleteTask}
          onEdit={editTask}
        />
      </main>
    </div>
  );
}

export default App;