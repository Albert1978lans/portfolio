import s from './Skills.module.css'
import stylesContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";

function Skills() {

    return (
        <div className={s.skillsBlock}>

            <div className={stylesContainer.container}>
                <div className={s.skillsContainer}>
                    <h2 className={s.title}>Skills</h2>
                    <div className={s.skills}>
                        <Skill title={'HTML'}
                               description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis deleniti, eum ipsa iusto magni minima nam, perspiciatis quae reprehenderit sed, sunt tempore velit.'}/>
                        <Skill title={'CSS'}
                               description={'Lorem ipsum dolor sit amet, eum ipsa iusto magni minima nam, perspiciatis quae reprehenderit sed, sunt tempore velit.'}/>
                        <Skill title={'React-Redux'}
                               description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis deleniti, sunt tempore velit.'}/>
                        <Skill title={'SCSS'}
                               description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis deleniti, perspiciatis quae reprehenderit sed, sunt tempore velit.'}/>
                        <Skill title={'Node.JS'}
                               description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis deleniti, eum ipsa iusto magni minima nam, perspiciatis quae reprehenderit sed, sunt tempore velit.'}/>
                        <Skill title={'Storybook'}
                               description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis deleniti, eum ipsa iusto magni minima nam, perspiciatis quae reprehenderit sed, sunt tempore velit.'}/>

                        {/*<Skill title={'React'} description={'Lorem ipsum dolor sit amet'}/>*/}
                        {/*<Skill title={'React'} description={'Lorem ipsum dolor sit amet'}/>*/}
                        {/*<Skill title={'React'} description={'Lorem ipsum dolor sit amet'}/>*/}
                        {/*<Skill title={'React'} description={'Lorem ipsum dolor sit amet'}/>*/}
                        {/*<Skill title={'React'} description={'Lorem ipsum dolor sit amet'}/>*/}
                        {/*<Skill title={'React'} description={'Lorem ipsum dolor sit amet'}/>*/}
                        {/*<Skill title={'React'} description={'Lorem ipsum dolor sit amet'}/>*/}
                        {/*<Skill title={'React'} description={'Lorem ipsum dolor sit amet'}/>*/}
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Skills;