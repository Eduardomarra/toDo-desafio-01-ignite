import { Header } from './components/Header';
import { NewTask } from './components/NewTask';

import styles from './App.module.css';
import './global.css';
import { Tasks } from './components/Tasks';
import { TaskEmpty } from './components/TaskEmpty';
import { useEffect, useState } from 'react';

export interface TaskProps {
    id: number;
    task: string;
    isCompleted: boolean;
}

export function App() {
  
    const [tasks, setTasks] = useState<TaskProps[]>([
        {
            id: 1,
            task: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
            isCompleted: false
        }
    ])

      const taskCompleted = tasks.filter( task => (task.isCompleted)).length


    function handleCreateNewTask(task: string) {
        setTasks([...tasks, {
            id: tasks.length + 1,
            task: task,
            isCompleted: false
        }])
    }

    function deleteTask(taskId: number){
        const newArrayTasks = tasks.filter( task => task.id !== taskId);
        setTasks(newArrayTasks);
    }

    function taskIsCompleted(taskId: number){
        const newArrayTasks = tasks.map( (task) => {
            if(task.id === taskId) {
                return {
                    ...task,
                    isCompleted: !task.isCompleted
                };
            }
            return task;
        });
        setTasks(newArrayTasks)
    }
    
  return (
    <div>
        <Header />

        <main className={styles.wrapper}>
            <NewTask 
                createNewTask={handleCreateNewTask}
            />

            <div className={styles.counterTasks}>
                <div className={styles.info}>
                    <span>Tarefas criadas <span className={styles.counter}>{tasks.length}</span></span>
                    <span>Concluídas <span className={styles.counter}>{taskCompleted} de {tasks.length}</span></span>
                </div>
            </div>
            {tasks.map(task => {
                return (
                    <Tasks
                        key={task.id}
                        task={task}
                        onDelete={deleteTask}
                        isCompleted={taskIsCompleted}
                    />
                )
            })}

            {tasks.length <1 && <TaskEmpty />}

          
        </main>
    </div>
  )
}
