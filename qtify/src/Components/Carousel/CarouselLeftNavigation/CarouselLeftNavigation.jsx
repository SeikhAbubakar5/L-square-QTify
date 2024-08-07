import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import { ReactComponent as LeftArrow } from "../../../assets/leftArrow.svg";
import styles from "./CarouselLeftNavigation.module.css";


const CarouselLeftNavigation = () => {
  const swiper = useSwiper();
  const [isBegining, setIsBegining] = useState(swiper.isBegining);

  useEffect(() => {
    swiper.on("slideChange", () => {
      setIsBegining(swiper.isBegining);
    });
  }, [swiper]);

        return(
            <div className={styles.leftNavigation} >
                {!isBegining && <LeftArrow onClick ={()=> swiper.slidePrev()}/>}
            </div>
        )
  
};

export default CarouselLeftNavigation;
