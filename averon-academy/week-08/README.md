## Live Demo

You can access the deployed application here:

https://averon-academy-week-01-6pfu.vercel.app

# Student Task Manager Pro

## Project Overview
Student Task Manager Pro is a responsive task management application built to help students organize their academic responsibilities, manage deadlines, and track their progress.

## Problem Statement
Students often struggle to organize assignments, remember deadlines, and prioritize their academic work. This application provides a simple way to manage tasks in one place.

## Features
- Add new tasks with a title, due date, and priority.
- Edit existing task names.
- Delete tasks.
- Mark tasks as completed or pending.
- Search tasks by name.
- Filter tasks by completion status.
- View dashboard statistics for total, pending, and completed tasks.
- Automatically save tasks using browser localStorage.
- Responsive design for mobile phones and desktops.

## Technologies Used
- React
- JavaScript
- HTML
- CSS
- React Hooks (useState and useEffect)
- Browser localStorage
- Vite

## How to Use
1. Add a task by entering its name.
2. Select a due date and priority.
3. Click Add Task.
4. Use Edit to change a task name.
5. Use Complete to update its status.
6. Search or filter tasks to find specific items.
7. Delete tasks when they are no longer needed.

## Project Structure
```text
src/
├── components/
│   ├── Header.jsx
│   ├── Dashboard.jsx
│   ├── TaskForm.jsx
│   ├── TaskItem.jsx
│   ├── TaskList.jsx
│   └── Filters.jsx
├── App.jsx
├── index.css
└── main.jsx
```

## Installation
To run the project locally:

```bash
npm install
npm run dev
```

## Learning Outcomes
Through this project, I practiced:
- Building reusable React components.
- Managing application state with useState.
- Using useEffect to save data.
- Handling user input and form submissions.
- Filtering and searching data.
- Saving information with localStorage.
- Creating responsive layouts with CSS.

## Author
Averon Academy Week 8 Capstone Project.
## Testing Results

The following features were tested successfully:

- Adding new tasks.
- Editing task names.
- Deleting tasks.
- Marking tasks as completed.
- Searching for tasks.
- Filtering pending and completed tasks.
- Saving tasks in localStorage.
- Restoring saved tasks after refreshing the page.

## Responsive Design

The application uses CSS media queries to adjust its layout for mobile phones and desktop screens.

## Future Improvements

- Add user authentication.
- Add task reminders.
- Allow editing task priorities and due dates.
- Add calendar integration.
