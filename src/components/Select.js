import styles from './Select.module.css';
import { useState } from "react";

export const Select = ({ options, nextCallback }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  if (selectedOption === null) {
    return options.map((option) => (
      <button
        className={styles.option}
        onClick={() => setSelectedOption(option)}
        key={option.id}
      >
        {option.text}
      </button>
    ));
  } else {
    return (
      <>
        <div className={styles.activeLabel}>
          <p className={styles.labelText}>{selectedOption.text}</p>
        </div>
        <div className={styles.note}>
          <p>{selectedOption.description}</p>
          <button
            className={styles.option}
            onClick={() => nextCallback(selectedOption)}
          >
            Next
          </button>
        </div>
      </>
    );
  }
}
