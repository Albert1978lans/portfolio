import s from './Projects.module.css'
import stylesContainer from '../common/styles/Container.module.css'
import Project from "./project/Project";
import todolistImg from '../images/todolists.jpg'
import socialImg from '../images/social1.jpg'

function Projects() {

    return (
        <div className={s.projectsBlock}>

            <div className={`${stylesContainer.container} ${s.projectsContainer}`}>
                <h2 className={s.title}>Projects</h2>
                <div className={s.projects}>
                    <Project
                        urlImg={todolistImg}
                        url={'https://albert1978lans.github.io/todolists/'}
                        nameProject='todolists'
                    />
                    <Project
                        urlImg={socialImg}
                        url={'https://albert1978lans.github.io/samurai-wai-main/'}
                        nameProject='social-network'
                    />
                </div>
            </div>

        </div>
    );
}

export default Projects;