import React, { useState } from "react";
import classNames from "classnames";
import StatusDropdown from "../StatusDropdown/StatusDropdown";
import TagsDropdown from "../TagsDropdown/TagsDropdown";

import styles from "./modal.module.css";

const EditingModal = ({ data, editModalIsOpen, closeEditModal, editTask }) => {
  const [title, setTitle] = useState(data?.title);
  const [desc, setDesc] = useState(data?.description);
  const [status, setStatus] = useState(data?.status);
  const [author, setAuthor] = useState(data?.author || "Администратор");
  const [date, setDate] = useState(data?.date);
  const [tags, setTags] = useState(data?.tags);

  function submitEditForm(event) {
    event.preventDefault();
    editTask({
      ...data,
      title,
      description: desc,
      status,
      tags,
    });
  }

  const handleStatusChange = (status) => {
    setStatus(status);
  };

  const handleTagsChange = (tag) => {
    setTags(tag);
    console.log(tag);
  };

  return (
    <div
      className={classNames(editModalIsOpen ? styles.open : "", styles.modal)}
    >
      <div className={classNames(styles.container, "glassmorphism")}>
        <form className={styles.form} onSubmit={submitEditForm}>
          <input
            type="text"
            id="title"
            className={classNames(
              styles.form_input,
              styles.form_title,
              styles.scrollable_element
            )}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          
          <div className={styles.desc}>
            <div className={styles.desc_info}>
              <span className={styles.desc_name}>Статус</span>
              <StatusDropdown
                active={status}
                onStatusChange={handleStatusChange}
              />
            </div>
            <div className={styles.desc_info}>
              <span className={styles.desc_name}>Автор</span>
              <span className={styles.desc_value}>{author}</span>
            </div>
            <div className={styles.desc_info}>
              <span className={styles.desc_name}>Дата создания</span>
              <span className={styles.desc_value}>{date}</span>
            </div>
            <div className={styles.desc_info}>
              <span className={styles.desc_name}>Теги</span>
              <TagsDropdown tags={tags} onTagsChange={handleTagsChange} />
            </div>
          </div>

          <textarea
            rows={5}
            type="text"
            id="description"
            className={styles.form_input}
            placeholder="Добавьте описание"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />

          <div className={styles.buttons}>
            <button
              type="submit"
              className={`${styles.close} ${styles.current}`}
            >
              Изменить
            </button>
            <button
              type="button"
              className={styles.close}
              onClick={() => closeEditModal()}
            >
              Отменить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditingModal;
