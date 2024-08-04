import React from 'react';
import styles from './TokenPepe.module.scss'
import image from '../../assets/Frame 1806.svg'
import { PepeToken } from '../Svgs/Svgs';

function TokenPepe() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.imagecopenothing}>
                    <PepeToken/>
                </div>
                <div className={styles.textblock}>
                    <h3 className={styles.maintextinblock}>TOKEN <span>$PEPE</span></h3>
                    <p className={styles.paragraph}>PEPE is a deflationary memecoin launched on Ethereum. The cryptocurrency was created as a tribute to the Pepe the Frog internet meme, created by Matt Furie, which gained popularity in the early 2000s.</p>
                </div>
            </div>
        </div>
    )
}

export default TokenPepe;