import React from 'react';
import styles from './TokenPNDC.module.scss'
import { PNDC } from '../Svgs/Svgs';

function TokenPNDC() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.textblock}>
                    <h3 className={styles.maintextinblock}>TOKEN <span>$PNDC</span></h3>
                    <p className={styles.paragraph}>PNDC it's a token drived by early adopters of PEPE which according to the Pauly0x (founder) will change the game once and for all!</p>
                </div>
                <div className={styles.imagepndc}>
                    <PNDC/>
                </div>
            </div>
        </div>

    )
}

export default TokenPNDC;