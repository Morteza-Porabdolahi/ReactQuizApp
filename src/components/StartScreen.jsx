export function StartScreen({ dispatch, selectedDiff, questionsLength }) {
  return (
    <div className="start">
      <h2>Welcome to The React Quiz !</h2>
      <h3>{questionsLength} questions to test your React mastery</h3>
      <select value={selectedDiff} onChange={(e) => dispatch({ type: 'selectDiff', payload: e.target.value })}>
        <option value="">All</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
      <button onClick={() => dispatch({ type: 'startQuiz' })} className="btn btn-ui">Let's Start</button>
    </div>
  )
}
