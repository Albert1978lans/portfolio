
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";

function Nav() {
    return (
        <div className={s.nav}>
            <NavLink className={({isActive}) => isActive ? s.active : ''} to={'.'}>Главная</NavLink>
            <NavLink className={({isActive}) => isActive ? s.active : ''} to={'./skills'}>Скиллы</NavLink>
            <NavLink className={({isActive}) => isActive ? s.active : ''} to={'./projects'}>Проекты</NavLink>
            <NavLink className={({isActive}) => isActive ? s.active : ''} to={'./contacts'}>Контакты</NavLink>
        </div>
    );
}

export default Nav