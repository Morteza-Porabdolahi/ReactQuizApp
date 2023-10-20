export function Progress({ questionsLength, questionIndex }) {
  return (
    <header className="progress">
      <progress value={questionIndex} min={0} max={questionsLength}></progress>
      <p>Question <strong>{questionIndex + 1}</strong>/{questionsLength}</p>
    </header>
  )
}
