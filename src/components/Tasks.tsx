import { Trash } from '@phosphor-icons/react'

import styles from './Tasks.module.css';
import { TaskProps } from '../App';
import { ChangeEvent, useState } from 'react';

interface Props {
    task: TaskProps
    onDelete: (taskId: number) => void;
    isCompleted: (taskId: number) => void;
}

export function Tasks({task, onDelete, isCompleted}: Props){
    const [isChecked, setIsChecked] = useState(false);

    return (
        <div className={styles.wrapper}>
            <div className={styles.task}>
                <label className={styles.container}>
                    <input className={styles.checked} type='checkbox' name='check' onClick={() => isCompleted(task.id)}/>
                    <div className={styles.checkmark}></div>
                </label>
                <p className={task.isCompleted ? styles.checked : ''}>{task.task}</p>
                <Trash size={20} onClick={() => onDelete(task.id)}/>
            </div>
        </div>
    );
};