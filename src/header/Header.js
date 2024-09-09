
import s from './Header.module.css';
import Nav from "../nav/Nav";

function Header() {
    return (
        <div className={s.header}>
            <div className={s.container}>
                <Nav/>
            </div>
        </div>

    );
}

export default Header;