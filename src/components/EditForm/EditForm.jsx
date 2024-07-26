import React from "react";
import styles from "./edit.module.css";

const EditForm = (status, title) => {
  console.log(title)
  return (
    <form>
      <textarea
        type="text"
        className={`${status ? styles.inputActive : ""} ${styles.input}`}
        defaultValue={title}
        // onChange={onChangeTitle}
        disabled={!status ? true : false}
      />
    </form>
  );
};

export default EditForm;
