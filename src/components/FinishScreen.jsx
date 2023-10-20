export function FinishScreen({ dispatch, highscore, points, possiblePoints }) {
  const percentage = Math.ceil((points / possiblePoints * 100));

  const emoji = percentage === 100 ? '🥇' : percentage >= 80 ? '🎉' : percentage >= 50 && percentage < 80 ? '🙃' : percentage > 0 && percentage < 50 ? '🤔' : '🤦';

  return (
    <>
      <p className="result">
        <span>{emoji}</span>
        You scored <strong>
          {points}
        </strong> out of {possiblePoints} ({percentage}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button onClick={() => dispatch({ type: 'restartQuiz' })} className="btn btn-ui">Restart Quiz</button>
    </>
  )
}
