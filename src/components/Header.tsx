import  logo  from '../assets/rocket.svg';

import styles from './Header.module.css'

export function Header() {
    return (
        <header className={styles.header}>
            <img 
                src={logo} 
                alt="Logo Rocket" 
            />
            <h1>to<span>do</span></h1>
        </header>
    );
}