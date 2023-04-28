import s from './Contacts.module.css'
import stylesContainer from '../common/styles/Container.module.css'

function Contacts() {

    return (
        <div className={ s.contactsBlock}>
            <div className={`${stylesContainer.container} ${s.contactsContainer}`}>
                <h2>Contacts</h2>
                <div className={s.contactInf}>
                    <input/>
                    <input/>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                <button className={s.btn}>send</button>
            </div>
        </div>
    );
}

export default Contacts;