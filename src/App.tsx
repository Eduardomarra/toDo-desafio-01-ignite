import { Header } from './components/Header';
import { NewTask } from './components/NewTask';

import styles from './App.module.css';
import './global.css';
import { Tasks } from './components/Tasks';
import { TaskEmpty } from './components/TaskEmpty';
import { useState } from 'react';

export interface TaskProps {
    id: number;
    task: string;
    isCompleted: boolean;
}

function App() {
  
    const [tasks, setTasks] = useState<TaskProps[]>([
        {
            id: 1,
            task: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
            isCompleted: false
        }
    ])

    const taskCompleted = tasks.filter( task => (task.isCompleted)).length

    function onNewTask(task: string) {
        setTasks([...tasks, {
            id: tasks.length + 1,
            task: task,
            isCompleted: false
        }])
    }
    
    
  return (
    <div>
        <Header />

        <main className={styles.wrapper}>
            <NewTask 
                onNewTask={onNewTask}
            />

            <div className={styles.counterTasks}>
                <div className={styles.info}>
                    <span>Tarefas criadas <span className={styles.counter}>{tasks.length}</span></span>
                    <span>Concluídas <span className={styles.counter}>{taskCompleted} de {tasks.length}</span></span>
                </div>
            </div>
            {tasks.map(task => {
                return <Tasks
                    key={task.id}
                    task={task}
                />
            })}

            {tasks.length <1 && <TaskEmpty />}

          
        </main>
    </div>
  )
}

export default App
