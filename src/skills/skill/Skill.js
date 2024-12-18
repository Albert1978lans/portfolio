import s from './Skill.module.css'
import {SvgIcons} from "../../svgIcons/SvgIcons";

function Skill(props) {
    return (
        <div className={s.skill}>
            <div className={s.icon}><SvgIcons name={props.icon}/> </div>
            <h3 className={s.title}>{props.title}</h3>
            <span className={s.description}>{props.description}</span>
        </div>
    );
}

export default Skill;