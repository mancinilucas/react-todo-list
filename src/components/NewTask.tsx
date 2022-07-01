import styles from './NewTask.module.scss'
import plusIcon from '../assets/button-plus.svg'

export function NewTask(){
  return(
    <form action="" className={styles.newTask}>
      <input 
        type="text" 
        placeholder="Adicione uma nova tarefa"
        className={styles.input}  
      />
      <button>
        <span>Criar</span> 
        <img src={plusIcon} alt="" />
      </button>
    </form>
  )
}