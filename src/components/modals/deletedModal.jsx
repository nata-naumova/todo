import React from "react";
import styles from "./modal.module.css";

const DeletedModal = () => {
  return (
    <div className={styles.modal}>
      <div className={styles.container}>
        <div className={styles.top}>
          <h3 className={styles.title}>Удалить задачу</h3>
        </div>
        <div className={styles.content}>
          <p className={styles.text}>Вы уверены?</p>
          <div className={styles.buttons}>
            <button
              type="button"
              className={`${styles.close} ${styles.current}`}
            >
              Ес оф кусь
            </button>
            <button type="button" className={styles.close}>
              Неть
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeletedModal;
