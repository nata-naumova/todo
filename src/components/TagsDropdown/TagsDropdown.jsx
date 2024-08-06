import React, { useState } from "react";
import styles from "./tagsDropdown.module.css";

const TagsDropdown = (tags, onTagsChange) => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [input, setInput] = useState("");

  const handleInputKeyDown = (event) => {
    if (event.key === "Enter" || event.key === ",") {
      event.preventDefault();
      addTag();
    }
  };

  const addTag = () => {
    const trimmedInput = input.trim();
    if (trimmedInput && !selectedTags.includes(trimmedInput)) {
      setSelectedTags([...selectedTags, trimmedInput]);
      setInput("");
    }
  };

  const removeTag = (tagToRemove) => {
    setSelectedTags(selectedTags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className={styles.tagInputContainer}>
      <input
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
        onKeyDown={handleInputKeyDown}
        placeholder="Введите теги..."
        className={styles.tagInput}
      />
      <div className={styles.tagList}>
        {selectedTags.map((tag, index) => (
          <span key={index} className={styles.tag}>
            {tag}
            <button
              type="button"
              onClick={() => removeTag(tag)}
              className={styles.removeTag}
            >
              ×
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default TagsDropdown;
