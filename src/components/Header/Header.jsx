import React from 'react';
import styles from './Header.module.scss'
import logo from '../../assets/logo.svg'
import {motion} from 'framer-motion'
import {NavLink} from "react-router-dom";
import {CartIcon, ConnectWalletIcon, SearchIcon, BurgerOpen} from "../Svgs/Svgs";

function Header() {
    const [isSearch, setSearch] = React.useState(false);
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <motion.img src={logo} alt="logo" whileHover={{scale: 1.2}} whileTap={{scale: 0.9}}/>

                <motion.div className={styles.navbar} initial={{borderRadius: '20px'}} animate={{borderRadius: '50px'}} transition={{duration: 0.5}}>
                    <motion.div className={styles.navitem} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                        <NavLink exact to="/" className={styles.navlink} activeClassName={styles.activelink}>HOME</NavLink>
                    </motion.div>
                    <motion.div className={styles.navitem} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                        <NavLink to="/shop" className={styles.navlink} activeClassName={styles.activelink}>SHOP</NavLink>
                    </motion.div>
                    <motion.div className={styles.navitem} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                        <NavLink to="/about" className={styles.navlink} activeClassName={styles.activelink}>ABOUT</NavLink>
                    </motion.div>
                </motion.div>



                <div className={styles.rightblock}>
                    {isSearch ? (
                        <div className={styles.allinput}>
                            <div className={styles.btns}><SearchIcon/></div>
                            <input className={styles.searchinput}
                                   type="text"
                                   placeholder="Найти пиццу..."></input>
                        </div>
                    ) : (
                        <motion.div onFocus={() => setSearch(true)} className={styles.btns} whileHover={{scale: 1.2}} whileTap={{scale: 0.9}}>
                            <SearchIcon/>
                        </motion.div>
                    )}

                    <motion.div className={styles.btns} whileHover={{scale: 1.2}} whileTap={{scale: 0.9}}>
                        <NavLink to="/shop" className={styles.btnlink}>
                            <CartIcon/>
                        </NavLink>
                    </motion.div>

                    <motion.div className={styles.btns} whileHover={{scale: 1.05}} whileTap={{scale: 0.9}}>
                        <ConnectWalletIcon/>
                    </motion.div>

                    <div className={styles.burgericon}>
                        <div className={styles.round}>
                            <BurgerOpen/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;