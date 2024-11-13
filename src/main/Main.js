
import s from './Main.module.css';
import stylesContainer from '../common/styles/Container.module.css'

function Main() {
    return (
        <div className={s.mainBlock}>
            <div className={`${stylesContainer.container} ${s.mainContainer}`}>
                <div className={s.text}>
                    <p>Привет</p>
                    <div className={s.name}>Меня зовут Альберт</div>
                    <p>Я Junior Frontend Developer</p>
                </div>
                <div className={s.photo}>
                </div>
            </div>

        </div>
    );
}

export default Main;