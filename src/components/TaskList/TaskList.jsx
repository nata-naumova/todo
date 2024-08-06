import React from "react";
import TaskItem from "../TaskItem/TaskItem";

import styles from "./taskList.module.css";

const TaskList = ({
  tasks,
  title,
  onComplete,
  openDeleteModal,
  openEditModal,
  onFavorite,
}) => {
  return (
    <section className={styles.taskList}>
      <h2 className={styles.taskList_title}>
        {title} <span className={styles.taskList_span}>{tasks.length}</span>
      </h2>
      <ul className={styles.list}>
        {tasks.length > 0 ? tasks.map((task) => {
          return (
            <TaskItem
              key={task.id}
              task={task}
              onComplete={onComplete}
              openDeleteModal={openDeleteModal}
              openEditModal={openEditModal}
              onFavorite={onFavorite}
            />
          );
        }) : (
          <p>No such tasks found</p>
        )}
      </ul>
    </section>
  );
};

export default TaskList;
