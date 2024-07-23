"use client"

import { useSwiper } from "swiper/react";
import { PiCaretRightBold, PiCaretLeftBold } from "react-icons/pi";


const WorkSliderbtns = ({ containerStyles, btnStyles }) => {
  const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <button className={btnStyles}>
        <PiCaretLeftBold  onClick={()=> swiper.slidePrev()} />
      </button>
      <button className={btnStyles}>
        <PiCaretRightBold  onClick={()=> swiper.slideNext()} />
      </button>
    </div>
  );
};

export default WorkSliderbtns;
