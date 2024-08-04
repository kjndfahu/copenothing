import React from 'react';
import styles from './AboutCopenothing.module.scss'
import image from '../../assets/Frame 1806.svg'

function AboutCopenothing() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <img className={styles.imagecopenothing} src={image} alt="image" />
                <div className={styles.textblock}>
                    <h3 className={styles.maintextinblock}>ABOUT <span>COPENOTHING</span></h3>
                    <p className={styles.paragraph}>Are you ready for COPE? Our team has worked hard to create a unique merch for pepe & pndc holders. All our products are manufactured using the most modern technologies and high-quality materials. They are not only stylish and unique, but also comfortable to use. We strive to provide our customers with a high level of satisfaction and joy from shopping.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutCopenothing;