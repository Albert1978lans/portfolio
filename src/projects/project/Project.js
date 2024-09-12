import s from './Project.module.css'

function Project(props) {

    return (
        <div className={s.project}>

            <div className={s.imgContainer}>
                <a href={props.url} target="_blank">
                    <img src={props.urlImg} alt='image project'/>
                </a>

            </div>
            <span className={s.name}>{props.nameProject}</span>
            <span className={s.description}>Description Project</span>


        </div>
    );
}

export default Project;