import './App.module.scss'
import { Header } from './components/Header'
import { NewTask } from './components/NewTask'
import { TaskSummary } from './components/TaskSummary'
import './global.scss'

export function App() {
  return (
    <>
      <Header />
      <NewTask />
      <TaskSummary />
    </>
    
  )
}
