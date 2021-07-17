import styles from './EmailBuilder.module.css';
import { useState } from 'react';
import man from './assets/man.png';
import { Select } from './components/Select';
import { FROM_OPTIONS, getEmailStartOptions, getEmailEndOptions, getGreetingOptions, getMessage, getSignOff, getSubjectOptions } from './options';

export const EmailBuilder = ({ finishQuiz }) => {
  const [from, setFrom] = useState(null);
  const [subject, setSubject] = useState(null);
  const [greeting, setGreeting] = useState(null);
  const [emailStart, setEmailStart] = useState(null);
  const [emailEnd, setEmailEnd] = useState(null);

  const clear = () => {
    setFrom(null);
    setSubject(null);
    setGreeting(null);
    setEmailStart(null);
    setEmailEnd(null);
  };

  const points = subject?.points + from?.points + greeting?.points + emailStart?.points + emailEnd?.points;
  const showSubject = from !== null;
  const showGreeting = subject !== null;
  const showEmailStart = greeting !== null;
  const showEmailEnd = emailStart !== null;
  const complete = emailEnd !== null;

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
        <div className={styles.labelGroup}>
          <div className={styles.label}>
            <p className={styles.labelText}>Body:</p>
          </div>
        </div>
        {
          showGreeting && (
            greeting ? (
              <p className={styles.emailText}>{greeting.text}</p>
            ) : (
              <div className={styles.labelGroup}>
                <Select
                  options={getGreetingOptions(from.id)}
                  nextCallback={setGreeting}
                />
              </div>
            )
          )
        }
        <p className={styles.emailText}>
          {
            showEmailStart && (
              emailStart ? (
                emailStart.text
              ) : (
                <div className={styles.labelGroup}>
                  <Select
                    options={getEmailStartOptions(from.id)}
                    nextCallback={setEmailStart}
                  />
                </div>
              )
            )
          }
          {' '}
          {
            showEmailEnd && (
              emailEnd ? (
                emailEnd.text
              ) : (
                <div className={styles.labelGroup}>
                  <Select
                    options={getEmailEndOptions(from.id)}
                    nextCallback={setEmailEnd}
                  />
                </div>
              )
            )
          }
        </p>
        {
          complete && (
            <p className={styles.emailText}>{getSignOff(from.id)}</p>
          )
        }
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
