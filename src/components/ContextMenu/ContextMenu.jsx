import React from "react";
import styles from "./contextMenu.module.css";

import {
  IoIosCheckmarkCircleOutline,
  IoIosCheckmarkCircle,
  IoMdCreate,
  IoIosHeartEmpty,
  IoIosHeart,
} from "react-icons/io";
import { FaTrashCan } from "react-icons/fa6";
import classNames from "classnames";

const ContextMenu = ({
  task,
  openEditModal,
  openDeleteModal,
  openContext,
  toggleContextMenu,
  onComplete,
  onFavorite,
}) => {
  return (
    <div className={classNames(openContext ? styles.open : "", styles.buttons)}>
      <button
        type="button"
        className={styles.context_btn}
        onClick={() => {
          openEditModal(task);
          toggleContextMenu();
        }}
      >
        <IoMdCreate color="inherit" size={15} />
        Edit task
      </button>
      <button
        type="button"
        className={styles.context_btn}
        onClick={() => {
          onComplete(task.id);
          toggleContextMenu();
        }}
      >
        {!task.isCompleted ? (
          <IoIosCheckmarkCircleOutline color="inherit" size={15} />
        ) : (
          <IoIosCheckmarkCircle color="inherit" size={15} />
        )}
        Mark as completed
      </button>
      <button
        type="button"
        className={styles.context_btn}
        onClick={() => {
          onFavorite(task.id);
          toggleContextMenu();
        }}
      >
        {!task.isFavorite ? (
          <IoIosHeartEmpty size={15} />
        ) : (
          <IoIosHeart size={15} color="#c71818" />
        )}
        Mark as important
      </button>
      <button
        type="button"
        className={classNames(styles.context_btn, styles.delete)}
        onClick={() => {
          openDeleteModal(task);
          toggleContextMenu();
        }}
      >
        <FaTrashCan color="#c71818" size={12} />
        Delete task
      </button>
    </div>
  );
};

export default ContextMenu;
