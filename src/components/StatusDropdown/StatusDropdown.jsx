import React, { useState } from "react";
import styles from "./statusDropdown.module.css";

const statuses = [
    { id: 1, statusName: "В работе", class: styles.inProgress },
    { id: 2, statusName: "Завершено", class: styles.completed },
    { id: 3, statusName: "В ожидании", class: styles.pending },
  ];

function StatusDropdown({ active, onStatusChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState(active || statuses[0]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleStatusSelect = (status) => {
    setSelectedStatus(status);
    setIsOpen(false);
    if (onStatusChange) {
      onStatusChange(status);
    }
  };

  return (
    <div className={styles.dropdown}>
      <div
        className={`${styles.dropdownToggle} ${selectedStatus.class}`}
        onClick={toggleDropdown}
      >
        {selectedStatus.statusName}
      </div>
      {isOpen && (
        <ul className={styles.dropdownMenu}>
          {statuses.map((status) => (
            <li
              key={status.id}
              className={`${styles.dropdownItem} ${status.class}`}
              onClick={() => handleStatusSelect(status)}
            >
              {status.statusName}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default StatusDropdown;
