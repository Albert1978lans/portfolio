import s from './Projects.module.css'
import stylesContainer from '../common/styles/Container.module.css'
import Project from "./project/Project";

function Projects() {

    return (
        <div className={s.projectsBlock}>

            <div className={`${stylesContainer.container} ${s.projectsContainer}`}>
                <h2>Projects</h2>
                <div className={s.projects}>
                    <Project/>
                    <Project/>
                    <Project/>
                    <Project/>
                    <Project/>
                </div>
            </div>

        </div>
    );
}

export default Projects;