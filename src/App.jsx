import React, { useEffect, useState } from "react";

import Header from "./components/Header/Header";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";
import Footer from "./components/Footer/Footer";

function App() {
  const [tasks, setTasks] = useState([]);

  const date = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = new Intl.DateTimeFormat("ru-RU", options).format(date);

  function loadSavedTasks() {
    const saved = localStorage.getItem("todo:savedTasks");
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  }

  useEffect(() => {
    loadSavedTasks();
  }, []);

  function setTaskAndSave(newTask) {
    sortTaskList(newTask);
    setTasks(newTask);
    localStorage.setItem("todo:savedTasks", JSON.stringify(newTask));
  }

  function addTask(title) {
    setTaskAndSave([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: title,
        isCompleted: false,
        date: formattedDate,
      },
    ]);
  }

  function editTask(title, taskId) {
    const updateTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          title: title,
          update: formattedDate,
        };
      }
      return task;
    });
    setTaskAndSave(updateTasks);
    console.log("updateTasks: ", updateTasks);
  }

  function deleteTaskById(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTaskAndSave(newTasks);
  }

  function sortTaskList(newTask) {
    const sortedArray = newTask.sort((a, b) => a.isCompleted - b.isCompleted);
    return sortedArray;
  }

  function toggleTaskCompletedById(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });

    setTaskAndSave(newTasks);
  }

  return (
    <>
      <Header />
      <main className="container">
        <TaskForm onAddTask={addTask} />
        <TaskList
          tasks={tasks}
          onComplete={toggleTaskCompletedById}
          onDelete={deleteTaskById}
          onEdit={editTask}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
