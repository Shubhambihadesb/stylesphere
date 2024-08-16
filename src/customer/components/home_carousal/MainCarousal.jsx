import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { mainCarousalData } from "./MainCarousalData";

const items = mainCarousalData.map((item) => (
  <img className="cursor-pointer" src={item.image} alt="" role="presentation" />
));

const MainCarousal = () => (
  <AliceCarousel
    mouseTracking
    items={items}
    autoPlay
    autoPlayInterval={1000}
    infinite
    disableButtonsControls
  />
);

export default MainCarousal;
