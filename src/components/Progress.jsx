import { useQuiz } from "../context/QuizContext"

export function Progress() {
  const { questionIndex, questionsLength } = useQuiz();

  return (
    <header className="progress">
      <progress value={questionIndex} min={0} max={questionsLength}></progress>
      <p>Question <strong>{questionIndex + 1}</strong>/{questionsLength}</p>
    </header>
  )
}
