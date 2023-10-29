import { useQuiz } from "../context/QuizContext";

export function PrevButton() {
  const { questionIndex, dispatch } = useQuiz();
  
  if(questionIndex > 0) {
    return (
      <button onClick={() => dispatch({ type: 'prevQuestion' })} className="btn btn-ui prev-btn">Previous</button>
    )
  }
}
