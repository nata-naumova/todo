import React, { useEffect, useState } from "react";

import Header from "./components/Header/Header";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";
import Footer from "./components/Footer/Footer";
import ConfirmationModal from "./components/Modals/ConfirmationModal";
import { formattedDate } from "./utils/constants";
import EditingModal from "./components/Modals/EditingModal";

function App() {
  const [tasks, setTasks] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [data, setData] = useState(null);

  const favoriteTasks = tasks.filter(
    (task) => task.isFavorite && !task.isCompleted
  );
  const completedTasks = tasks.filter((task) => task.isCompleted);
  const remainingTasks = tasks.filter(
    (task) => !task.isFavorite && !task.isCompleted
  );

  // modals
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);

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
    // sortTaskList(newTask);
    setTasks(newTask);
    localStorage.setItem("todo:savedTasks", JSON.stringify(newTask));
  }

  function addTask(title) {
    setTaskAndSave([
      {
        id: crypto.randomUUID(),
        title: title,
        isCompleted: false,
        isFavorite: false,
        date: formattedDate,
      },
      ...tasks,
    ]);
  }

  function editTask(task) {
    const updateTasks = tasks.map((element) => {
      if (element.id === task.id) {
        return {
          ...element,
          title: task.title,
          description: task.description,
          update: formattedDate,
          status: task.status,
          tags: task.tags,
        };
      }
      return element;
    });
    console.log("task: ", task);
    setTaskAndSave(updateTasks);
    closeEditModal();
  }

  function deleteTaskById() {
    if (selectedId) {
      const newTasks = tasks.filter((task) => task.id !== selectedId);
      setTaskAndSave(newTasks);
    }
    setSelectedId(null);
    closeDeleteModal();
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

  function toggleTaskFavouriteById(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isFavorite: !task.isFavorite,
        };
      }
      return task;
    });

    setTaskAndSave(newTasks);
  }

  const openDeleteModal = (task) => {
    setDeleteModalIsOpen(true);
    setSelectedId(task.id);
  };

  const closeDeleteModal = () => {
    setDeleteModalIsOpen(false);
  };

  const openEditModal = (task) => {
    setEditModalIsOpen(true);
    setData(task);
  };

  const closeEditModal = () => {
    setEditModalIsOpen(false);
    setData(null);
  };

  return (
    <>
      <Header />
      <TaskForm onAddTask={addTask} />
      <main className="container">
        <TaskList
          tasks={favoriteTasks}
          title={"Избранное"}
          onComplete={toggleTaskCompletedById}
          openDeleteModal={openDeleteModal}
          openEditModal={openEditModal}
          onFavorite={toggleTaskFavouriteById}
        />
        <TaskList
          tasks={remainingTasks}
          title={"В работе"}
          onComplete={toggleTaskCompletedById}
          openDeleteModal={openDeleteModal}
          openEditModal={openEditModal}
          onFavorite={toggleTaskFavouriteById}
        />
        <TaskList
          tasks={completedTasks}
          title={"Выполненные"}
          onComplete={toggleTaskCompletedById}
          openDeleteModal={openDeleteModal}
          openEditModal={openEditModal}
          onFavorite={toggleTaskFavouriteById}
        />
      </main>
      <Footer />

      <ConfirmationModal
        deleteModalIsOpen={deleteModalIsOpen}
        closeDeleteModal={closeDeleteModal}
        onDelete={deleteTaskById}
      />

      {data && (
        <EditingModal
          data={data}
          editModalIsOpen={editModalIsOpen}
          closeEditModal={closeEditModal}
          editTask={editTask}
        />
      )}
    </>
  );
}

export default App;
