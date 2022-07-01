import IconClipboard from '../assets/clipboard.svg'
import styles from './TaskSummary.module.scss'


export function TaskSummary(){
  return(
    <div className={styles.container}>
      <div className={styles.summaryInfo}>
        <div className={styles.taskCreated}>
          <strong>Tarefas criadas</strong>
          <span>0</span>
        </div>

        <div className={styles.taskDone}>
          <strong>Concluídas</strong>
          <span>0</span>
        </div>

      </div>

      <div className={styles.tasksSummary}>
        <img src={IconClipboard} alt="" />
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  )
}