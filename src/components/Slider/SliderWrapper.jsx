import React from 'react';
import styles from './SliderWrapper.module.scss'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import cap from '../../assets/image.svg'
import { CartImage} from '../Svgs/Svgs';

function SliderWrapper({activeIndex, setActiveIndex, products}) {
    return (
      <div className={styles.slider}>
        <div className={styles.product}>
          <div className={styles.product_block}>
              <img className={styles.product_image} src={cap} alt="cap" />
              <div className={styles.lowerblock}>
                <div className={styles.leftproductblock}>
                  <p className={styles.product_name}>PEPKA CAP</p>
                  <h5 className={styles.product_price}>28$</h5>
                </div>
                <div className={styles.product_btn}>
                  <CartImage/>
                </div>
              </div>
          </div>
        </div>
      </div>
    );
}

export default SliderWrapper;