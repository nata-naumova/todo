import React from "react";
import styles from "./modal.module.css";
import classNames from "classnames";

const ConfirmationModal = ({
  deleteModalIsOpen,
  closeDeleteModal,
  onDelete,
}) => {
  return (
    <div className={`${deleteModalIsOpen ? styles.open : ""} ${styles.modal}`}>
      <div className={classNames(styles.container, "glassmorphism")}>
        <div className={styles.content}>
          <p className={styles.text}>Уверен?</p>
          <div className={styles.buttons}>
            <button
              type="button"
              className={`${styles.close} ${styles.current}`}
              onClick={() => onDelete()}
            >
              Конечно, да
            </button>
            <button
              type="button"
              className={styles.close}
              onClick={closeDeleteModal}
            >
              Нет, сомневаюсь
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
