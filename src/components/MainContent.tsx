import { useState, ChangeEvent } from 'react'

import plusIcon from '../assets/button-plus.svg'
import clipboardIcon from '../assets/clipboard.svg'
import notCheckedIcon from '../assets/check.svg'
import trashIcon from '../assets/trash.svg'

import styles from './MainContent.module.scss'

interface Task {
  id: number;
  title: string;
  isComplete: boolean;
}

export function MainContent(){
  const [tasks, setTasks] = useState<Task[]>([])
  const [newTaskTitle, setNewTaskTitle] = useState('');

  //Criar Task, capturar a mensagem e renderizar em tela
  //Crie uma nova task com um id random, não permita criar caso o título seja vazio.

  function handleCreateNewTask() {
    if(!newTaskTitle) return
    
    const newTask = {
      id: Math.random(),
      title: newTaskTitle,
      isComplete: false
    }
    
    setTasks(oldState => [...oldState, newTask])
    
    setNewTaskTitle('')
  }

  //Verificar se a task não está em branco



  //Alternar se task está concluída ou não



  //Remover a task da lista
  function handleRemoveTask(id:number) {
    const filteredTasks = tasks.filter(task => task.id !== id)

    setTasks(filteredTasks)
  }

  return(
    <main>
      <div className={styles.wrapper}>
        <form action="" className={styles.newTask}>
          <input 
            type="text" 
            placeholder="Adicione uma nova tarefa"
            className={styles.input}
            onChange={(event) => setNewTaskTitle(event.target.value)}
            value={newTaskTitle}
          />
          <button type="submit" onClick={handleCreateNewTask}>
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

          {tasks.map(task =>{
            return(
              <div className={styles.newTaskContainer}>
                <button type="button">
                  <img src={notCheckedIcon} className={styles.icon} alt=""/>
                </button>
                <span><p>{task.title}</p></span>
                <button type="button" onClick={() => handleRemoveTask(task.id)}>
                  <img src={trashIcon} alt="" className={styles.icon}/>
                </button>
              </div>
            )
          })}

        </div>
      </div>
    
    </main>
  )
}