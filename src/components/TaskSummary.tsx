import { TaskCard } from './TaskCard'

import clipboardIcon from '../assets/clipboard.svg'

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
        <img src={clipboardIcon} alt="" />
        <span><strong>Você ainda não tem tarefas cadastradas</strong>
        <p>Crie tarefas e organize seus itens a fazer</p></span>
      </div>

      <TaskCard isChecked taskTitle="Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer."/>
      <TaskCard isChecked taskTitle="Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer."/>
      <TaskCard isChecked taskTitle="Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer."/>
    </div>
  )
}