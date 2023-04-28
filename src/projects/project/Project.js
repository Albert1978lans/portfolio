import s from './Project.module.css'

function Project() {

    return (
        <div className={s.project}>

            <div className={s.img}></div>

                <span className={s.name}>Name Project</span>
                <span className={s.description}>Description Project</span>


        </div>
    );
}

export default Project;