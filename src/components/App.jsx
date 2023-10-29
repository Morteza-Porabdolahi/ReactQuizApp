import { Header } from "./Header";
import { Main } from "./Main";
import { Error } from "./Error";
import { Loader } from "./Loader";
import { StartScreen } from "./StartScreen";
import { Question } from "./Question";
import { NextButton } from "./NextButton";
import { Progress } from "./Progress";
import { FinishScreen } from "./FinishScreen";
import { Footer } from "./Footer";
import { Timer } from "./Timer";
import { PrevButton } from './PrevButton'

import { useQuiz } from "../context/QuizContext";

export function App() {
  const { status } = useQuiz();
  
  return (
    <div className="app">
      <Header />
      <Main>
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && <StartScreen />}
        {status === 'active' &&
          <>
            <Progress />
            <Question />
            <Footer>
              <PrevButton />
              <Timer />
              <NextButton />
            </Footer>
          </>

        }
        {status === 'finished' &&
          <FinishScreen />
        }
      </Main>
    </div>
  )
}
