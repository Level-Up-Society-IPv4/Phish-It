import styles from './EmailBuilder.module.css';
import { useState } from 'react';
import man from './assets/man.png';
import { Select } from './components/Select';
import { FROM_OPTIONS, getMessage, getSubjectOptions } from './options';

export const EmailBuilder = ({ finishQuiz }) => {
  const [from, setFrom] = useState(null);
  const [subject, setSubject] = useState(null);

  const clear = () => {
    setFrom(null);
    setSubject(null);
  };

  const points = subject?.points + from?.points;
  const showSubject = from !== null;
  const complete = subject !== null;

  return (
    <>
      <div className={styles.App}>
        <div className={styles.labelGroup}>
          <div className={styles.label}>
            <p className={styles.labelText}>To:</p>
          </div>
          <div className={styles.label}>
            <img src={man} className={styles.man} alt="John" />
            <p className={styles.labelText}>John@SeventhNinthBank.com</p>
          </div>
        </div>
        <div className={styles.labelGroup}>
          <div className={styles.label}>
            <p className={styles.labelText}>From:</p>
          </div>
          {
            from ? (
              <div className={styles.label}>
                <p className={styles.labelText}>{from.text}</p>
              </div>
            ) : (
              <Select
                options={FROM_OPTIONS}
                nextCallback={setFrom}
              />
            )
          }
        </div>
        <div className={styles.labelGroup}>
          <div className={styles.label}>
            <p className={styles.labelText}>Subject:</p>
          </div>
          {
            showSubject && (
              subject ? (
                <div className={styles.label}>
                  <p className={styles.labelText}>{subject.text}</p>
                </div>
              ) : (
                <Select
                  options={getSubjectOptions(from.id)}
                  nextCallback={setSubject}
                />
              )
            )
          }
        </div>
      </div>
      {
        complete ? (
          <div className={styles.scoreContainer}>
            <h1>Score: {points}</h1>
            <p className={styles.message}>{getMessage(points)}</p>
            <button onClick={clear} className={styles.tryAgain}>Try again</button>
            <button onClick={finishQuiz} className={styles.next}>Who's next?</button>
          </div>
        ) : (
          <p className={styles.message}>Use the buttons to build your email!</p>
        )
      }
    </>
  );
}
