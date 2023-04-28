
import s from './Main.module.css';
import stylesContainer from '../common/styles/Container.module.css'

function Main() {
    return (
        <div className={s.mainBlock}>
            <div className={`${stylesContainer.container} ${s.mainContainer}`}>
                <div className={s.text}>
                    <span>Hi There</span>
                    <h1>I am Jeffrey Aaron</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={s.photo}></div>
            </div>

        </div>
    );
}

export default Main;