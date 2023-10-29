import { useEffect } from "react"
import { useQuiz } from "../context/QuizContext";

export function Timer() {
  const { dispatch, secondsRemaining } = useQuiz();
  
  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  
  useEffect(() => {
    const timerId = setInterval(() => {
      dispatch({ type: 'countDownSeconds' })
    }, 1000)

    return () => {
      clearInterval(timerId);
    }
  }, [dispatch])

  return (
    <div className="timer">{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</div>
  )
}
