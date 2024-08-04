import React, {useState} from 'react';
import styles from './ProductSlider.module.scss'
import {LineDown, LineUp} from '../Svgs/Svgs';
import SliderWrapper from '../Slider/SliderWrapper';
import image from "../../assets/card--product.png";
import image2 from "../../assets/card--guide.png";

const products = [
    {id: 1, name: "PEPKA CAP", price: 28, image: image},
    {id: 2, name: "PEPKA CAP", price: 28, image: image2},
    {id: 3, name: "PEPKA CAP", price: 28, image: image}
];

function ProductSlider() {
    const [isPopupOpen, setIsPopupOpen] = React.useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const goNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % products.length);
    };

    const goPrev = () => {
        setActiveIndex((prevIndex) => (prevIndex + products.length - 1) % products.length);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.btnsblock}>
                    <div className={styles.leftblock}>
                        <div className={styles.featureditem}>FEATURED ITEM</div>
                        <div className={styles.allpopup}>
                            <div className={isPopupOpen ? `${styles.popupwindowactive}` : `${styles.popupwindow}`}
                                 onClick={() => setIsPopupOpen(!isPopupOpen)}>
                                <div className={styles.popupclosed}>
                                    <p>ALL</p>
                                    {isPopupOpen
                                        ? <LineUp onClick={() => setIsPopupOpen(false)}/>
                                        : <LineDown onClick={() => setIsPopupOpen(true)}/>}
                                </div>
                            </div>
                            {isPopupOpen &&
                                <div className={styles.popupopen}>
                                    <div className={styles.popupcontent}>
                                        <div className={styles.lipopup}>CAP</div>
                                        <div className={styles.lipopup}>T-SHIRT</div>
                                    </div>
                                </div>}
                        </div>
                    </div>
                    <div className={styles.rightblock}>
                        <div className={styles.sliderbtns}>
                            <div onClick={goPrev} className={styles.button}>&lt;</div>
                            <div onClick={goNext} className={styles.button}>&gt;</div>
                        </div>
                    </div>
                </div>
                <SliderWrapper activeIndex={activeIndex} setActiveIndex={setActiveIndex} products={products}/>
            </div>
        </div>
    )
}

export default ProductSlider;