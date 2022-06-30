import styles from './NewTask.module.scss'

export function NewTask(){
  return(
    <form action="" className={styles.newTask}>
      <input 
        type="text" 
        placeholder="Adicione uma nova tarefa"
        className={styles.input}  
      />
      <button>Criar</button>
    </form>
  )
}