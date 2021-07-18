import styles from './CheckPhish.module.css';
import { useContext, useState } from 'react';
import { EXPContext } from '../contexts/EXPContext';
import { CoinContext } from '../contexts/CoinContext';

// keep this in sync with the version in functions-dev/phish/phish.js
const SUBJECTS = new Set([
  'You account haccked!',
  'Bad news for you, buckaroo',
  'Oopsie poopsie! You have a problem',
  'Blub blub, no fishes here',
  'Account security validation check',
  'Open urgently, your security is at risk',
  'Acount invaded by th ehackers',
  "I've got 99 problems and a hacker is 98 of them",
  '"Mail, you have" -Yoda, probably',
  'We might "subject" you to a few "phishy" puns',
  'EMARGENTSY ACCONT ISHUES'
]);

export const CheckPhish = () => {
  const { addExp } = useContext(EXPContext);
  const { addCoins } = useContext(CoinContext);
  const [subject, setSubject] = useState('');
  const [checked, setChecked] = useState(false)
  const [isFakePhish, setIsFakePhish] = useState(false);
  const checkPhish = async (event) => {
    event.preventDefault();
    setSubject('');
    const subjectValid = SUBJECTS.has(subject);
    setIsFakePhish(subjectValid);
    if (subjectValid) {
      addExp(50);
      addCoins(5);
    }
    setChecked(true);
  };

  return (
    <>
      <p className={styles.prompt}>
        {
          checked ? (
            isFakePhish ? 'Nice catch! That was us trying to trick you. Take 50 EXP!'
              : "Uh oh, that wasn't us! You should report that email to your IT department."
          ) : 'Did we try to phish you? Enter the subject line here:'
        }
      </p>
      <form onSubmit={checkPhish} className={styles.phishForm}>
        <input
          type="text"
          className={styles.subjectInput}
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
        />
        <button className={styles.check}>Check</button>
      </form>
    </>
  )
};
