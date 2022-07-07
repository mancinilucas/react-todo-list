import { ChangeEvent, useState } from 'react'

import plusIcon from '../assets/button-plus.svg'
import clipboardIcon from '../assets/clipboard.svg'
import notCheckedIcon from '../assets/check.svg'
import trashIcon from '../assets/trash.svg'

import styles from './MainContent.module.scss'

interface TaskProps {
  id: number;
  title: string;
  isChecked: boolean;
}

export function MainContent(){

  const [tasks, setTasks] = useState<TaskProps[]>([])
  const [taskContent, setTaskContent] = useState('')

  //Criar Task, capturar a mensagem
  function handleNewCommentChange(event:ChangeEvent<HTMLInputElement>){
    setTaskContent(event.target.value)    
  }

  function handleCreateTask(){
    const task = {
      id: Math.random(),
      title: taskContent,
      isChecked: false
    }

    setTasks([...tasks, task])
  }
 
  //Crie uma nova task com um id random, não permita criar caso o título seja vazio.

  

  //Verificar se a task não está em branco



  //Alternar se task está concluída ou não



  //Remover a task da lista


  return(
    <main>
      <div className={styles.wrapper}>
        <form action="" className={styles.newTask}>
          <input 
            type="text" 
            placeholder="Adicione uma nova tarefa"
            className={styles.input}
            onSubmit={handleNewCommentChange}
            value={taskContent}
          />
          <button 
            type="submit"
            onClick={handleCreateTask}
          >
            <span>Criar</span> 
            <img src={plusIcon} alt="" />
          </button>
        </form>

        <div className={styles.summaryContainer}>
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

          <div>
            {tasks.map(task =>{
              return(
                <div key={task.id} className={styles.newTaskContainer}>
                  <button type="button">
                    <img src={notCheckedIcon} className={styles.icon} alt=""/>
                  </button>
                  <span><p>{task.title}</p></span>
                  <button 
                    type="button"
                  >
                    <img 
                      src={trashIcon} 
                      alt="" 
                      className={styles.icon}
                    />
                  </button>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    
    </main>
  )
}