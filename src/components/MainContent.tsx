import { FormEvent, MouseEvent, useState } from 'react'
import { v4 as uuid } from 'uuid';

import plusIcon from '../assets/button-plus.svg'
import clipboardIcon from '../assets/clipboard.svg'
import notCheckedIcon from '../assets/check.svg'
import taskCheckedIcon from '../assets/checked.svg'
import trashIcon from '../assets/trash.svg'

import styles from './MainContent.module.scss'

interface TaskProps {
  id: string;
  title: string;
  isChecked: boolean;
}

export function MainContent(){
  const [tasks, setTasks] = useState<TaskProps[]>([])
  const [newTaskTitle, setNewTaskTitle] = useState('')
  
  function isCompletedCount(){
    const isCompleted = tasks.filter(task => task.isChecked)

    return isCompleted.length
  }

  function handleCreateNewTask(e:FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>){
    e.preventDefault();

    if (!newTaskTitle) return

    const newTask = {
      id: uuid(),
      title: newTaskTitle,
      isChecked: false
    }

    setTasks([...tasks, newTask])

    setNewTaskTitle('')
  }
  
  function handleRemoveTask(id:string) {
    const filteredTasks = tasks.filter(task => task.id !== id)

    setTasks(filteredTasks)
  }

  function handleToggleTaskCompletion(id: string) {
    const taskCompletion = tasks.map(task => task.id === id 
      ? { ...task, isChecked: !task.isChecked, } 
      : task
    )
    setTasks(taskCompletion)
  }
  
  return(
    <main>
      <div className={styles.wrapper}>
        <form action="" className={styles.newTask} onSubmit={handleCreateNewTask}>
          <input 
            type="text" 
            placeholder="Adicione uma nova tarefa"
            className={styles.input}
            onChange={(event) => setNewTaskTitle(event.target.value)}
            value={newTaskTitle}
          />
          <button 
            type="submit"
          >
            <span>Criar</span> 
            <img src={plusIcon} alt="" />
          </button>
        </form>

        <div className={styles.summaryContainer}>
          <div className={styles.summaryInfo}>
            <div className={styles.taskCreated}>
              <strong>Tarefas criadas</strong>
              <span>{tasks.length}</span>
            </div>

            <div className={styles.taskDone}>
              <strong>Concluídas</strong>
              <span>{isCompletedCount()}</span>
            </div>

           </div>

          {tasks.length === 0 && <div className={styles.tasksSummary}>
            <img src={clipboardIcon} alt="" />
            <span><strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p></span>
          </div>}

          <div>
            {tasks.map(task =>{
              return(
                <div key={task.id} className={styles.newTaskContainer}>
                  <button 
                    type="button"
                    onClick={() => handleToggleTaskCompletion(task.id)}
                  >
                    {task.isChecked === false ? <img src={notCheckedIcon} className={styles.icon} alt=""/> : <img src={taskCheckedIcon} className={styles.icon} alt=""/>}
                  </button>
                  <span>
                    {task.isChecked === true 
                    ? <p className={styles.taskTitleLine}>{task.title}</p>
                    : <p>{task.title}</p>
                    }
                  </span>
                  <button
                    className={styles.removeButton}
                    type="button"
                    onClick={() => handleRemoveTask(task.id)}
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