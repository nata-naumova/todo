import React from "react";
import TaskItem from "../TaskItem/TaskItem";

import styles from "./taskList.module.css";

const TaskList = ({ tasks, onComplete, onDelete, onEdit }) => {
  const taskLength = tasks.length;
  const completedTask = tasks.filter((task) => task.isCompleted).length;

  return (
    <section className={styles.taskList}>
      <div className={styles.info}>
        <p className={`${styles.infoText} ${styles.all}`}>
          Всего: {taskLength}
        </p>
        <p className={`${styles.infoText} ${styles.completed}`}>
          Готово: {completedTask}
        </p>
      </div>
      <ul className={styles.list}>
        {tasks.length > 0 ? (
          tasks.map((task) => {
            return (
              <TaskItem
                key={task.id}
                task={task}
                onComplete={onComplete}
                onDelete={onDelete}
                onEdit={onEdit}
              />
            );
          })
        ) : (
          <p>Список задач пуст</p>
        )}
      </ul>
    </section>
  );
};

export default TaskList;
