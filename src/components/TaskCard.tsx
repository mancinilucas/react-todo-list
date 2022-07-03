import styles from './TaskCard.module.scss'

import notCheckedIcon from '../assets/check.svg'
import trashIcon from '../assets/trash.svg'
import checkedIcon from '../assets/checked.svg'

//Dar check em tasks concluídas

interface TaskCardProps{
  isChecked: boolean;
  taskTitle: string;
}

export function TaskCard({ isChecked = false, taskTitle, ...props }:TaskCardProps){
  return(
    <div className={styles.container}>
      <button type="button">
        <img src={notCheckedIcon} className={styles.icon} alt=""/>
      </button>
      <span><p>{taskTitle}</p></span>
      <button>
        <img src={trashIcon} alt="" className={styles.icon}/>
      </button>
    </div>
  )
}