import { useEffect } from "react"

export function Timer({ dispatch, secondsRemaining }) {
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
