import s from './Footer.module.css'
import stylesContainer from '../common/styles/Container.module.css'

// function Footer() {
//
//     return (
//         <div className={ s.footerBlock}>
//             <div className={`${stylesContainer.container} ${s.footerContainer}`}>
//                 <h2 className={s.title}>Ivanov Ivan</h2>
//                 <div className={s.footerInf}>
//                     <div className={s.item}></div>
//                     <div className={s.item}></div>
//                     <div className={s.item}></div>
//                     <div className={s.item}></div>
//                 </div>
//                 <div className={s.footerBottom}>2023 Все права защищены</div>
//             </div>
//         </div>
//     );
// }

function Footer() {

    return (
        <div className={ s.footerBlock}>
                <div className={s.footerBottom}>2024 Все права защищены</div>
        </div>
    );
}


export default Footer;