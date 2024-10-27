import s from './Footer.module.css'
import stylesContainer from '../common/styles/Container.module.css'
import {SvgIcons} from "../svgIcons/SvgIcons";

function Footer() {
    return (
        <div className={s.footerBlock}>
            <div className={`${stylesContainer.container}`}>
                <div className={s.list}>
                    <ul className={s.contacts}>
                        <li className={s.contactsItem}>
                            <a href='http://t.me/Bert_ch' target="_blank">
                                <div className={s.contactsBody}>
                                    <div className={s.icon}>
                                        <SvgIcons name={'telegram'}/>
                                    </div>
                                    <div>
                                        <p>пишите</p>
                                        <p>телеграм</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className={s.contactsItem}>
                            <a href='tel:+79373020011'>
                                <div className={s.contactsBody}>
                                    <div className={s.icon}><SvgIcons name={'phone'}/></div>
                                    <div>
                                        <p>Звоните</p>
                                        <p>+7(937)302-00-11</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className={s.contactsItem}>
                            <a href='https://github.com/Albert1978lans' target="_blank">
                                <div className={s.contactsBody}>
                                    <div className={s.icon}><SvgIcons name={'github'}/></div>
                                    <div>
                                        <p>Заходите</p>
                                        <p>github</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className={s.contactsItem}>
                            <div className={s.contactsBody}>
                                <div className={s.icon}><SvgIcons name={'prava'} /></div>
                                <div>
                                    <p>2024 Альберт Шаутдинов</p>
                                    <p>Все права защищены</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
}


export default Footer;

