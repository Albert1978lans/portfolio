
import s from './Header.module.css';
import styles from '../common/styles/Container.module.css'
import {NavLink} from "react-router-dom";
import {useState} from "react";
import { FaBars } from "react-icons/fa";

function Header() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className={s.header}>
            <div className={styles.container}>
                <div className={s.wrapper}>
                    <span className={s.logo}>Logo</span>
                    <div className={`${s.nav} ${isOpen ? s.activeMenu : ''}` }>
                        <NavLink className={({isActive}) => isActive ? s.active : ''} to={'.'} onClick={() => setIsOpen(!isOpen)}>Главная</NavLink>
                        <NavLink className={({isActive}) => isActive ? s.active : ''} to={'./skills'} onClick={() => setIsOpen(!isOpen)}>Скиллы</NavLink>
                        <NavLink className={({isActive}) => isActive ? s.active : ''} to={'./projects'} onClick={() => setIsOpen(!isOpen)}>Проекты</NavLink>
                        <NavLink className={({isActive}) => isActive ? s.active : ''} to={'./contacts'} onClick={() => setIsOpen(!isOpen)}>Контакты</NavLink>
                    </div>
                    <button className={s.menuBtn}
                        onClick={() => {setIsOpen(!isOpen)}}
                    >
                        <FaBars />
                    </button>
                </div>

            </div>
        </div>

    );
}

export default Header;