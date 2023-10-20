import { Options } from "./Options";

export function Question({ question, dispatch, questionIndex, userAnswers }) {
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} questionIndex={questionIndex} userAnswers={userAnswers} />
    </div>
  )
}
