import {
  StrictMode
} from 'react'
import { createRoot } from 'react-dom/client'

import { App } from './components/App.jsx'
import { QuizProvider } from './context/QuizContext.jsx'

import './index.css'

const root = createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <QuizProvider>
      <App />
    </QuizProvider>
  </StrictMode>,
)
