import styles from './QuizIntro.module.css';
import man from './assets/man.png';

export const QuizIntro = ({ startQuiz }) => (
  <div className={styles.container}>
    <h1>Phishing Challenge</h1>
    <img className={styles.man} src={man} alt="Man" width={300} height={300} />
    <p className={styles.text}>
      John is a middle manager working at Seventh Ninth Bank.
      His Gmail has lots of sensitive financial documents that you want to swipe.
      Cast your line and reel in his password!
    </p>
    <button className={styles.start} onClick={startQuiz}>Start</button>
  </div>
);
