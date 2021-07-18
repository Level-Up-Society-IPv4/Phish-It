import styles from './PhishReveal.module.css'

export const PhishReveal = () => (
  <>
    <h1>You were phished!</h1>
    <p className={styles.message}>
      Okay, not really. You just clicked a fake phishing email we sent to test you. Be more careful next time!
    </p>
  </>
)