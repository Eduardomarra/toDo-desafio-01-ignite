import { Trash } from '@phosphor-icons/react'

import styles from './Tasks.module.css';
import { TaskProps } from '../App';

interface Props {
    task: TaskProps
}

export function Tasks({task}: Props){

    return (
            <div className={styles.wrapper}>
                <div className={styles.task}>
                    <label className={styles.container}>
                        <input type='checkbox' name='check'/>
                        <div className={styles.checkmark}></div>
                    </label>
                    <p>{task.task}</p>
                    <Trash size={20} />
                </div>
            </div>
    );
};