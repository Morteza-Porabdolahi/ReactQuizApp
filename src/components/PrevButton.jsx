export function PrevButton({ questionIndex, questionsLength, dispatch }) {
  if(questionIndex > 0) {
    return (
      <button onClick={() => dispatch({ type: 'prevQuestion' })} className="btn btn-ui prev-btn">Previous</button>
    )
  }
}
