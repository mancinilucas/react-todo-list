import styles from './NewTask.module.scss'
import plusIcon from '../assets/button-plus.svg'
import { FormEvent } from 'react'

export function NewTask(){
  function handleNewTask(event:FormEvent){
    event.preventDefault()

    console.log(event.target)
  }

  return(
    <form action="" className={styles.newTask}>
      <input 
        type="text" 
        placeholder="Adicione uma nova tarefa"
        className={styles.input}
        onSubmit={handleNewTask}
      />
      <button type="submit">
        <span>Criar</span> 
        <img src={plusIcon} alt="" />
      </button>
    </form>
  )
}