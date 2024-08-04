import React from 'react';
import styles from './Main.module.scss'
import CopenothingTitle from "../CopenothingTitle/CopenothingTitle";
import ProductSlider from '../ProductSlider/ProductSlider';
import AboutCopenothing from '../AboutCopenothing/AboutCopenothing';
import TokenPNDC from './../TokenPNDC/TokenPNDC';
import TokenPepe from '../TokenPepe/TokenPepe';
import ContactSupport from '../ContactSupportBlock/ContactSupport';

function Main() {
    return (
        <div className={styles.wrapper}>
            <div className ={styles.content}>
                <div className={styles.firsttitle}>
                    <CopenothingTitle/>
                    <ProductSlider/>
                    <AboutCopenothing/>
                    <TokenPNDC/>
                    <TokenPepe/>
                    <ContactSupport/>
                </div>
            </div>
        </div>
    )
}
export default Main