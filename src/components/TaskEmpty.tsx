import taskEmpty from '../assets/taskEmpty.svg';

import styles from './TaskEmpty.module.css';

export function TaskEmpty() {
    return (
        <div className={styles.wrapper}>
            <img src={taskEmpty} alt="" />
            <p className={styles.bold}>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    );
};