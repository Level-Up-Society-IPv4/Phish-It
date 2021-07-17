import styles from './App.module.css';
import { useState } from 'react';
import man from './assets/man.png';
import { Select } from './components/Select';
import { FROM_OPTIONS, getSubjectOptions } from './options';

export const App = () => {
  const [from, setFrom] = useState(null);
  const [subject, setSubject] = useState(null);
  const points = subject?.points + from?.points;

  const showSubject = from !== null;

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
        subject && <h1>Score: {points}</h1>
      }
    </>
  );
}
