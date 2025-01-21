import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Todo from './Todo.tsx'
import style from './Main.module.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className={style.Main}>
      <App />
      <Todo />
    </div>
  </StrictMode>,
)
