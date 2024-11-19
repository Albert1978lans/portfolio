import s from './Projects.module.css'
import stylesContainer from '../common/styles/Container.module.css'
import Project from "./project/Project";
import todolistImg from '../images/todolists.jpg'
import socialImg from '../images/social1.jpg'
import {useState} from "react";
import {ModalWindow} from "./modalWindow/ModalWindow";

const projectsDescription = {
    'todolists': {
        technologies: ['react-redux', 'redux-toolkit','typescript', 'formik', 'unit-tests', 'material-ui', 'axios', 'react-router-dom', 'redux-thunk'],
        description: 'Данный проект выполнен с применением функцианального программирования с использованием хуков. При логинизации применяется библиотека FORMIK, ' +
            'которая производит валидацию полей ввода. При вводе имени тудулиста или таски если количество символов превышает 100' +
            ', с сервера приходит ошибка которая выведется под полем ввода.  Имена тудулистов и тасок можно редактировать двойным щелчком мыши. ' +
            'Ошибки сервера и сети выводяться во всплывающем окне.Для входа вве'
    },
    'socialNetwork': {
        technologies: ['react-redux', 'redux-thunk', 'typescript', 'redux-form', 'react-router-dom', 'redux-thunk', 'reselect'],
        description: 'Данный проект выполнен с применением классовых компонент.'
    }
}

function Projects() {

    const [modal, setModal] = useState(false)
    const [nameProjects, setNameProjects] = useState('todolists')

    const controlModal = (props) => {
        setModal(!modal)
        setNameProjects(props)
    }
    const closeModal = (props) => {
        setModal(false)
    }
    return (
        <div className={s.projectsBlock}>

            <div className={`${stylesContainer.container} ${s.projectsContainer}`}>
                <h2 className={s.title}>Projects</h2>
                <div className={s.projects}>
                    <Project
                        urlImg={todolistImg}
                        url={'https://albert1978lans.github.io/todolists/'}
                        nameProject='todolists'
                        // modal={modal}
                        controlModal={controlModal}
                    />
                    <Project
                        urlImg={socialImg}
                        url={'https://albert1978lans.github.io/samurai-wai-main/'}
                        nameProject='socialNetwork'
                        // modal={modal}
                        controlModal={controlModal}
                    />
                </div>

                {/*{modal && <div className={`${s.modalWindow} ${modal ? s.active : ''}`}>*/}
                {/*    <ModalWindow project={projectsDescription[nameProjects]}/>*/}
                {/*</div>}*/}
                <div className={`${s.modalWindow} ${modal ? s.active : ''}`}>
                    <ModalWindow
                        project={projectsDescription[nameProjects]}
                        closeModal={closeModal}
                    />
                </div>
            </div>

        </div>
    );
}

export default Projects;