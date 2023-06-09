import { TaskEmpty } from './TaskEmpty';
import styles from './Tasks.module.css';

export function Tasks(){
    return (
        <div className={styles.wrapper}>
            <div className={styles.info}>
                <span>Tarefas criadas <span className={styles.counter}>0</span></span>
                <span>Concluídas <span className={styles.counter}>0 de 0</span></span>
            </div>
            <div className={styles.tasks}>
               <TaskEmpty />
            </div>
        </div>
    );
};