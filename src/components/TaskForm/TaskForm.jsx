import React, { useState } from "react";
import styles from "./taskForm.module.css";

const TaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState("");

  function onChangeTitle(event) {
    setTitle(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onAddTask(title);
    setTitle("");
  }
  return (
    <section className={styles.taskForm}>
      <form action="#" className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="taskName"
          className={styles.input}
          placeholder="Введите текст"
          value={title}
          onChange={onChangeTitle}
        />
        <button
          className={styles.button}
          title="Добавить новую задачу"
        >
          Добавить
        </button>
      </form>
    </section>
  );
};

export default TaskForm;
