import React, { useRef, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

import "react-alice-carousel/lib/alice-carousel.css";

const HomeSectionCarousal = ({ data, sectionName }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  //   const slidePrev = () => setActiveIndex(activeIndex - 1);
  //   const slideNext = () => setActiveIndex(activeIndex + 1);
  //   const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const slidePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
    }
  };

  const slideNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
    }
  };

  // Sync active index with carousel changes
  const syncActiveIndex = (event) => {
    setActiveIndex(event.item);
  };

  const items = data
    .slice(0, 10)
    .map((item) => <HomeSectionCard product={item} />);

  return (
    <div className="">
      <h2
        className="text-2xl font-extrabold text-gray-800 py-5 "
        style={{ textAlign: "left" }}
      >
        {sectionName}
      </h2>
      <div
        className="relative p-5 border"
        style={{ borderRadius: "1rem", height: "24rem" }}
      >
        <AliceCarousel
          ref={carouselRef}
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />
        {activeIndex !== items.length - 5 && (
          <Button
            onClick={slideNext}
            variant="contained"
            className="z-40 bg-white"
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(50%) rotate(90deg)",
              bgcolor: "white",
            }}
            aria-label="next"
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(90deg)", color: "black" }}
            />
          </Button>
        )}
        {activeIndex !== 0 && (
          <Button
            onClick={slidePrev}
            variant="contained"
            className="z-40 bg-white"
            sx={{
              position: "absolute",
              top: "8rem",
              left: "0rem",
              transform: "translateX(-50%) rotate(90deg)",
              bgcolor: "white",
            }}
            aria-label="next"
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(-90deg)", color: "black" }}
            />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCarousal;
