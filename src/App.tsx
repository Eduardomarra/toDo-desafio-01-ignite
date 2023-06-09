import { Header } from './components/Header';
import { NewTask } from './components/NewTask';

import styles from './App.module.css';
import './global.css';
import { Tasks } from './components/Tasks';
import { TaskEmpty } from './components/TaskEmpty';

function App() {

    const tasks = [
        {
            name: "eduardo"
        }
    ]
  
  return (
    <div>
        <Header />

        <main className={styles.wrapper}>
            <NewTask />

            <div className={styles.counterTasks}>
                <div className={styles.info}>
                    <span>Tarefas criadas <span className={styles.counter}>0</span></span>
                    <span>Concluídas <span className={styles.counter}>0 de 0</span></span>
                </div>
            </div>
           <Tasks />
           <Tasks />
           <Tasks />
           <Tasks />
           <Tasks />
        </main>
    </div>
  )
}

export default App
