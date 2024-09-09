import React from 'react';
import Header from "../header/Header";
import {Outlet} from "react-router-dom";
import Footer from "../footer/Footer";
import s from "./root.module.css"

function Root() {
    return (
        <div className={s.rootWrapper}>
            <div className={s.rootHeader}>
                <Header/>
            </div>

            <div className={s.rootOutlet}>
                <Outlet/>
            </div>
            <div className={s.rootFooter}>
                <Footer/>
            </div>
        </div>
    );
}

export default Root;