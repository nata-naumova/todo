import React, { useState } from "react";
import ContextMenu from "../ContextMenu/ContextMenu";
import classNames from "classnames";

import {
  IoIosCheckmarkCircleOutline,
  IoIosCheckmarkCircle,
  IoIosHeartEmpty,
  IoIosHeart,
  IoIosMore,
} from "react-icons/io";


import styles from "./taskItem.module.css";

const TaskItem = ({
  task,
  onComplete,
  openDeleteModal,
  openEditModal,
  onFavorite,
}) => {
  const [openContext, setOpenContext] = useState(false);

  function toggleContextMenu() {
    setOpenContext(!openContext);
  }

  
  return (
    <>
      <li
        className={classNames(
          task.isCompleted ? styles.completed : "",
          styles.item,
          "glassmorphism"
        )}
      >
        <button
          type="button"
          className={styles.button}
          onClick={() => onComplete(task.id)}
          title="Отменить как выполненное"
        >
          {!task.isCompleted ? (
            <IoIosCheckmarkCircleOutline color="#000" size={25} />
          ) : (
            <IoIosCheckmarkCircle color="#000" size={25} />
          )}
        </button>
        <h3
          className={classNames(
            task.isCompleted ? styles.completed_title : "",
            styles.task_title
          )}
        >
          {task.title}
        </h3>
        <button
          type="button"
          className={classNames(styles.button, styles.task_favourite)}
          title="Добавить в избранное"
          onClick={() => onFavorite(task.id)}
          disabled={task.isCompleted ? true : false}
        >
          {!task.isFavorite ? (
            <IoIosHeartEmpty size={20} />
          ) : (
            <IoIosHeart size={20} color="#c71818" />
          )}
        </button>
        <button
          type="button"
          className={styles.context_button}
          onClick={() => toggleContextMenu()}
          title="Другое"
          disabled={task.isCompleted ? true : false}
        >
          <IoIosMore color="inherit" size={20} />
        </button>

        <ContextMenu
          task={task}
          openEditModal={openEditModal}
          openDeleteModal={openDeleteModal}
          openContext={openContext}
          toggleContextMenu={toggleContextMenu}
          onFavorite={onFavorite}
          onComplete={onComplete}
        />
      </li>
    </>
  );
};

export default TaskItem;
