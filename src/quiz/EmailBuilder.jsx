import styles from './EmailBuilder.module.css';
import { useContext, useState } from 'react';
import man from '../assets/man.png';
import { Select } from './components/Select';
import { FROM_OPTIONS, getEmailStartOptions, getEmailEndOptions, getGreetingOptions, getMessage, getSignOff, getSubjectOptions } from './options';
import { EXPContext } from '../contexts/EXPContext';
import { CoinContext } from '../contexts/CoinContext';
import coin from '../assets/coin.png';

export const EmailBuilder = ({ finishQuiz }) => {
  const { addExp } = useContext(EXPContext);
  const { addCoins } = useContext(CoinContext);
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

  const finish = (newEmailEnd) => {
    setEmailEnd(newEmailEnd);
    const points = subject?.points + from?.points + greeting?.points + emailStart?.points + newEmailEnd?.points;
    addExp(points);
    addCoins(Math.floor(points / 10));
  }

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
        {
          showEmailStart && !emailStart && (
              <div className={styles.labelGroup}>
                <Select
                  options={getEmailStartOptions(from.id)}
                  nextCallback={setEmailStart}
                />
              </div>
            )
          }
        <p className={styles.emailText}>
          {
            showEmailStart && emailStart && emailStart.text
          }
          {' '}
          {
            showEmailEnd && emailEnd && emailEnd.text
          }
        </p>
        {
          showEmailEnd && !emailEnd && (
            <div className={styles.labelGroup}>
              <Select
                options={getEmailEndOptions(from.id)}
                nextCallback={finish}
              />
            </div>
          )
        }
        {
          complete && (
            <p className={styles.emailText}>{getSignOff(from.id)}</p>
          )
        }
      </div>
      {
        complete ? (
          <div className={styles.scoreContainer}>
            <h1 className={styles.score}>Score: {points}</h1>
            {
              points >= 10 && (
                <div className={styles.coinMessage}>
                  <p>+</p>
                  <img src={coin} alt="coin" className={styles.coin} />
                  <p>{Math.floor(points / 10)}</p>
                </div>
              )
            }
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
