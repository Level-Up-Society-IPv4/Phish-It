import { useState } from "react"
import { EmailBuilder } from "./EmailBuilder";
import { QuizIntro } from "./QuizIntro";

export const Quiz = () => {
  const [startedQuiz, setStartedQuiz] = useState(false);

  return startedQuiz ? (
    <EmailBuilder />
  ) : (
    <QuizIntro startQuiz={() => setStartedQuiz(true)} />
  );
}
