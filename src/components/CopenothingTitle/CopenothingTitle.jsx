import React from "react";
import styles from './Copenothing.module.scss'
import {Copenothing, ShopNowBtn, Pepe, Cow} from "../Svgs/Svgs";
import {motion} from "framer-motion";
import cap from '../../assets/cap.svg'
import tshirt from '../../assets/tshirt.svg'
import merchtt from '../../assets/merchstore.png'

function CopenothingTitle() {
    const [isHover, setHover] = React.useState(false);

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.hzshka}
                     onMouseEnter={(e) => setHover(true)}
                     onMouseLeave={(e) => setHover(false)}>

                    <img className={styles.merch} src={merchtt} alt="logo"/>

                    <div className={styles.copenothing}>
                        <Copenothing/>
                    </div>

                    <motion.img initial={{y: -300, x: 130}} animate={isHover ? {y: -425} : {y: -300}}
                                className={styles.tshirt} src={tshirt}
                                alt="tshirt"/>
                    <motion.img initial={{y: -500, x: 1125}} animate={isHover ? {y: -615} : {y: -500}} className={styles.cap} src={cap}></motion.img>

                </div>

                <div className={styles.shopnowbtn}>
                    <ShopNowBtn/>
                </div>

                <div className={styles.cowimg}>
                    <Cow/>
                </div>

                <div className={styles.pepeimg}>
                    <Pepe/>
                </div>
            

            </div>
        </div>
    )
}

export default CopenothingTitle;