import s from './ModalWindow.module.css'

export const ModalWindow = (props) => {
    return <div className={s.wrapper}>
        <div className={s.title}>
            <h1>о проекте</h1>
            <div className={s.buttonClose} onClick={() => props.closeModal()}></div>
        </div>
        <h2>Тенологии и библиотеки</h2>

        <div>
            <ul>
                {props.project.technologies.map((t,i) => <li key={i}>{t}</li>)}
            </ul>
        </div>
        <h2>Описание проекта</h2>
        <div>
            {props.project.description}
        </div>
    </div>
}



