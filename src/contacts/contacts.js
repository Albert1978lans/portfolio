import s from './Contacts.module.css'
import Container from '../common/styles/Container.module.css'
//
// function Contacts() {
//
//     return (
//         <div className={ s.contactsBlock}>
//             <div className={`${Container.container} ${s.contactsContainer}`}>
//                 <h2 className={s.title}>Contacts</h2>
//                 <form className={s.contactInf}>
//                     <input/>
//                     <input/>
//                     <textarea name="" id="" cols="30" rows="10"></textarea>
//                 </form>
//                 <button className={s.btn}>send</button>
//             </div>
//         </div>
//     );
// }
//
// export default Contacts;

import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';

export const Contacts = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_razt3pk', 'contact_form', form.current, {
                publicKey: 'ML2YI-QOJiYMy5Kb3',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div className={s.contactsBlock}>
            <div className={`${Container.container} ${s.contactsContainer}`}>
                <h2 className={s.title}>Contacts</h2>
                <form ref={form} onSubmit={sendEmail} className={s.contactInf}>
                    <label>Name</label>
                    <input type="text" name="user_name"/>
                    <label>Email</label>
                    <input type="email" name="user_email"/>
                    <label>Message</label>
                    <textarea name="message"/>
                    <input type="submit" value="Send"/>
                </form>
            </div>
        </div>

    );
};
