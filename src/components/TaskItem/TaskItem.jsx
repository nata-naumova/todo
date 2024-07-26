import React, { useState } from "react";

import {
  IoIosCheckmarkCircleOutline,
  IoIosCheckmarkCircle,
  IoMdCreate,
  IoMdTrash,
} from "react-icons/io";

import styles from "./taskItem.module.css";

const TaskItem = ({ task, onComplete, onDelete, onEdit }) => {
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState("");

  function onChangeTitle(event) {
    setTitle(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onEdit(title, task.id);
    setTitle("");
    setEdit(false);
  }

  return (
    <>
      <li
        className={`${task.isCompleted ? styles.completed : ""} ${styles.item}`}
      >
        <div className={styles.content}>
          <form
            action="#"
            className={`${edit ? styles.inputActive : ""} ${styles.form}`}
            onSubmit={handleSubmit}
          >
            <textarea
              type="text"
              className={styles.input}
              defaultValue={task.title}
              onChange={onChangeTitle}
              disabled={!edit ? true : false}
            />
            <button className={`${styles.button} ${styles.update}`}>
              Обновить
            </button>
          </form>
          {task.update ? (
            <p className={styles.date}>Изменено: {task.update}</p>
          ) : (
            <p className={styles.date}>Создано: {task.date}</p>
          )}
        </div>
        <div className={styles.buttons}>
          <button
            type="button"
            className={styles.button}
            onClick={() => onComplete(task.id)}
          >
            {!task.isCompleted ? (
              <IoIosCheckmarkCircleOutline color="#138d38" />
            ) : (
              <IoIosCheckmarkCircle color="#138d38" />
            )}
          </button>
          <button
            type="button"
            className={`${edit ? styles.active : ""} ${styles.button}`}
            onClick={() => setEdit(!edit)}
          >
            <IoMdCreate />
          </button>
          <button
            type="button"
            className={styles.button}
            onClick={() => onDelete(task.id)}
          >
            <IoMdTrash color="#c71818" />
          </button>
        </div>

        {/* <DeletedModal  /> */}
      </li>
    </>
  );
};

export default TaskItem;
