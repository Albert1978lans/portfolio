import s from './Contacts.module.css'
import Container from '../common/styles/Container.module.css'

function Contacts() {

    return (
        <div className={ s.contactsBlock}>
            <div className={`${Container.container} ${s.contactsContainer}`}>
                <h2 className={s.title}>Contacts</h2>
                <form className={s.contactInf}>
                    <input/>
                    <input/>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </form>
                <button className={s.btn}>send</button>
            </div>
        </div>
    );
}

export default Contacts;