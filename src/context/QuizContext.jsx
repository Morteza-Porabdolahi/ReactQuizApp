import { createContext, useContext, useReducer, useEffect } from "react";

const QuizContext = createContext();

const BASE_URL = "https://react-quiz-app-morteza355.vercel.app";
const SECS_PER_QUESTION = 30;

const initialState = {
  questions: [],
  userAnswers: [],
  questionIndex: 0, 
  points: 0,
  highscore: Number(localStorage.getItem('highscore')),
  // ready,error,active,finished,loading
  status: 'loading',
  secondsRemaining: null,
  selectedDiff: '',
}

function reducer(state, action) {
  switch (action.type) {
    case 'dataReceived': {
      return {
        ...state,
        questions: action.payload,
        status: 'ready',
      }
    }
    case 'dataFailed': {
      return {
        ...state,
        status: 'error',
      }
    }
    case 'startQuiz': {
      return {
        ...state,
        status: 'active',
        secondsRemaining: state.questions.length * SECS_PER_QUESTION,
      }
    }
    case 'optionClicked': {
      const copyAnswers = state.userAnswers.slice();

      if(copyAnswers[state.questionIndex] && copyAnswers[state.questionIndex] === action.payload) {
        copyAnswers[state.questionIndex] = null;
      }else {
        copyAnswers[state.questionIndex] = action.payload;
      }

      return {
        ...state,
        userAnswers: copyAnswers,
      }
    }
    case 'nextQuestion': {
      return {
        ...state,
        questionIndex: state.questionIndex + 1,
      }
    }
    case 'prevQuestion': {
      return {
        ...state,
        questionIndex: state.questionIndex - 1,
      }
    }
    case 'finishQuiz': {
      const sumPoints = state.questions.reduce((acc, curr, i) => curr.correctOption === state.userAnswers[i] ? acc + curr.points : acc, 0);
      const newHighScore = sumPoints > state.highscore ? sumPoints : state.highscore;

      localStorage.setItem('highscore', newHighScore);

      return {
        ...state,
        status: 'finished',
        points: sumPoints,
        highscore: newHighScore,
      }
    }
    case 'restartQuiz': {
      return {
        ...initialState,
        status: 'ready',
        highscore: state.highscore,
        selectedDiff: state.selectedDiff,
        questions: state.questions,
      }
    }
    case 'countDownSeconds': {
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining - 1 <= 0 ? 'finished' : state.status,
      }
    }
    case 'selectDiff': {
      return {
        ...state,
        selectedDiff: action.payload,
      }
    }
    default: {
      throw new Error('Unknown action !');
    }
  }
}

export const QuizProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { highscore, selectedDiff, questions, status, questionIndex, userAnswers, points, secondsRemaining } = state;

  const question = questions[questionIndex];
  const questionsLength = questions.length;
  const possiblePoints = questions.reduce((acc, question) => acc + question.points, 0)

  useEffect(() => {
    fetch(`${BASE_URL}/api?${selectedDiff ? `difficulty=${selectedDiff}` : ''}`).then(res => res.json()).then(questions => {
      dispatch({
        type: 'dataReceived',
        payload: questions,
      })
    }).catch((e) => {
      console.log(e);
      dispatch({
        type: 'dataFailed',
      })
    })
  }, [selectedDiff])
  
  return (
    <QuizContext.Provider value={{
      status,
      question,
      possiblePoints,
      highscore,
      selectedDiff,
      questions,
      questionIndex,
      userAnswers,
      points,
      secondsRemaining,
      dispatch,
      questionsLength,
    }}>
      {children}
    </QuizContext.Provider>
  )
}

export const useQuiz = () => {
  const value = useContext(QuizContext);

  if(!value) throw new Error('QuizContext was used outside of its provider');

  return value;
}
