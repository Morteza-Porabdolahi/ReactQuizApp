export function NextButton({ questionIndex, questionsLength, dispatch }) {
  if(questionIndex < questionsLength - 1) {
    return (
      <button onClick={() => dispatch({ type: 'nextQuestion' })} className="btn btn-ui">Next</button>
    )
  }

  if(questionIndex === questionsLength - 1) {
    return (
      <button onClick={() => dispatch({ type: 'finishQuiz' })} className="btn btn-ui">Finish</button>
    )
  }
}
