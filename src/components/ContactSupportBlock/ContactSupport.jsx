import React from 'react';
import styles from './ContactSupport.module.scss'
import left from '../../assets/left.svg'

function ContactSupport() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.upblock}>
                    <img className={styles.image} src={left} alt="image" />
                    <div className={styles.rightblock}>
                        <h4 className={styles.text}>Are there any issues with the delivery or payment confirmation?</h4>
                        <button className={styles.suppbtn}>CONTACT SUPPORT</button>
                    </div>
                </div>

                <div className={styles.footerblock}>
                    <h4 className={styles.copyright}>COPYRIGHT 2023 COPENOTHING. ALL RIGHTS RESERVED</h4>
                    <div className={styles.rules}>
                        <h4 className={styles.rulestext}>TERMS OF SERVICE</h4>
                        <h4 className={styles.rulestext}>PRIVACY POLICY</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactSupport;