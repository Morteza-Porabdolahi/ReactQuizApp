import { useQuiz } from "../context/QuizContext";
import { Options } from "./Options";

export function Question() {
  const { question, dispatch, questionIndex, userAnswers } = useQuiz();
  
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} questionIndex={questionIndex} userAnswers={userAnswers} />
    </div>
  )
}
