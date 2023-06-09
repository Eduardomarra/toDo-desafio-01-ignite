import { Trash } from '@phosphor-icons/react'

import styles from './Tasks.module.css';

export function Tasks(){
    return (
            <div className={styles.wrapper}>
                <div className={styles.task}>
                    <label className={styles.container}>
                        <input type='checkbox' name='check'/>
                        <div className={styles.checkmark}></div>
                    </label>
                    <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
                    <Trash size={20} />
                </div>
            </div>
    );
};