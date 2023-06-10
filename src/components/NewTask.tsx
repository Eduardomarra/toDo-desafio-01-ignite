import { PlusCircle } from '@phosphor-icons/react';

import styles from './NewTask.module.css';
import { ChangeEvent, FormEvent, useState } from 'react';

interface Props {
    onNewTask: (task: string) => void;
}


export function NewTask({onNewTask}: Props) {
    const [task, setTask] = useState('')

    function onChangeTask(event: ChangeEvent<HTMLInputElement>){
        setTask(event.target.value)
    }

    function handleSubmit(event: FormEvent){
        event.preventDefault()
        onNewTask(task)
    }

    return (
        <div className={styles.wrapper}>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"  
                    placeholder='Adicionar nova tarefa'
                    onChange={onChangeTask}
                />
                <button type='submit'>
                    Criar
                    <PlusCircle size={20}/>
                </button>
            </form>
        </div>
    );
};