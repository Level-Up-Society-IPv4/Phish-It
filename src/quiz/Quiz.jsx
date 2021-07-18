import styles from './Quiz.module.css';
import { useState } from 'react'
import { EmailBuilder } from './EmailBuilder';
import { QuizIntro } from './QuizIntro';

export const Quiz = () => {
  const [startedQuiz, setStartedQuiz] = useState(false);
  const [finishedQuiz, setFinishedQuiz] = useState(false);

  if (!startedQuiz) {
    return <QuizIntro startQuiz={() => setStartedQuiz(true)} />;
  } else if (!finishedQuiz) {
    return <EmailBuilder finishQuiz={() => setFinishedQuiz(true)} />
  } else {
    return (
      <>
        <h1>That's all!</h1>
        <p className={styles.message}>
          You finished the demo!
          In the future, there will be more challenges,
          and maybe even simulated email conversations with targets.
        </p>
      </>
    )
  }
}
