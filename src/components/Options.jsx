import { useQuiz } from "../context/QuizContext";

export function Options() {
  const { question, dispatch, userAnswers, questionIndex } = useQuiz();
  
  return (
    <div className="options">
      {question.options.map((option, i) => (
        <button key={option} className={`btn btn-option ${userAnswers[questionIndex] !== undefined && i === userAnswers[questionIndex] ? 'answer' : ''}`} onClick={() => dispatch({ type: 'optionClicked', payload: i })}>{option}</button>
      ))}
    </div>
  )
}
