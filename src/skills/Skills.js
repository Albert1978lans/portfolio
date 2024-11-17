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
                        <Skill title={'HTML'} icon={'html'}
                               description={'Знание структуры HTML-документа. Умение использовать основные теги HTML. Понимание важности семантической разметки для улучшения доступности и SEO. Знание основных атрибутов (например, id, class, src, href, alt) и умение использовать их для настройки элементов.'}/>
                        <Skill title={'CSS'} icon={'css'}
                               description={'Основы CSS: знание селекторов, свойств и значений. Знание методов позиционирования (static, relative, absolute, fixed) и работы с флексбоксом и грид-сетками. Знание принципов адаптивной и отзывчивой верстки (responsive design). Умение использовать медиа-запросы для изменения стилей в зависимости от размера экрана.'}/>
                        <Skill title={'JavaScript'} icon={'javascript'}
                               description={'Владение современными стандартами JavaScript, включая синтаксис ES6 и выше, такие как стрелочные функции, промисы, async/await и деструктуризация.'}/>
                        <Skill title={'React'} icon={'react'}
                               description={'Понимание основ React, включая компоненты, пропсы, состояние (state), жизненный цикл компонентов и хуки (Hooks).'}/>
                        <Skill title={'Redux'} icon={'redux'}
                               description={'Опыт работы с Redux для управления состоянием приложения, включая использование Redux Toolkit и middleware (например, thunk или saga).'}/>
                        <Skill title={'React Router'} icon={'router'}
                               description={'Знание библиотеки React Router для реализации маршрутизации и навигации в одностраничных приложениях (SPA).'}/>

                        <Skill title={'TypeScript'} icon={'ts'} description={' Знание TypeScript для добавления статической типизации в React-приложения'}/>
                        <Skill title={' Version Control (Git)'} icon={'git'} description={'Использование Git для контроля версий и совместной работы над проектами.'}/>
                        <Skill title={'Тестирование'} icon={'test'} description={'Опыт написания unit тестов'}/>
                        <Skill title={'Formik'} icon={'formik'} description={' Умение обрабатывать ошибки валидации и отображать их пользователю. Понимание, как обрабатывать событие отправки формы с помощью onSubmit. Знание о том, как управлять асинхронными действиями '}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;