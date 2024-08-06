import React, { useState } from "react";
import styles from "./taskForm.module.css";

const TaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (title.trim() !== "") {
      onAddTask(title);
      setTitle("");
    }
  }
  return (
    <section className={styles.taskForm}>
      <form action="#" className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="taskName"
          className={`${styles.input} glassmorphism`}
          placeholder="What do you need to do?"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <button className={styles.button} title="Добавить новую задачу">
          + Add
        </button>
      </form>
    </section>
  );
};

export default TaskForm;
