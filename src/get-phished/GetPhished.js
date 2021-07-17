import styles from './GetPhished.module.css';
import { useState } from 'react';

export const GetPhished = () => {
  const [email, setEmail] = useState('');
  const [lastSentEmail, setLastSentEmail] = useState(null);
  const [isError, setIsError] = useState(false);
  const sendEmail = async (event) => {
    event.preventDefault();
    setEmail('');
    try {
      await fetch('/.netlify/functions/phish', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });
      setIsError(false);
      setLastSentEmail(email);
    } catch {
      setIsError(true);
      setLastSentEmail(email);
    }
  };

  return (
    <>
      <p className={styles.prompt}>
        {
          lastSentEmail ? (
            isError ? `Error emailing '${lastSentEmail}'.`
              : `Okay, we'll phish '${lastSentEmail}'! You might have to check your spam folder.`
          ) : 'Enter your email to get phished!'
        }
      </p>
      <form onSubmit={sendEmail} className={styles.emailForm}>
        <input
          type="text"
          className={styles.emailInput}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <button className={styles.phishMe}>Phish me!</button>
      </form>
    </>
  )
};
