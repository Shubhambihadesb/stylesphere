import React from "react";
import MainCarousal from "../../components/home_carousal/MainCarousal";
import HomeSectionCarousal from "../../components/HomeSectionCarousal/HomeSectionCarousal";
import { mens_kurta } from "../../../Data/mens_kurta";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
  return (
    <div>
      <MainCarousal />
      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarousal data={mens_kurta} sectionName={"Men's Kurta"} />
        <HomeSectionCarousal data={mens_kurta} sectionName={"Men's Shoes"} />
        <HomeSectionCarousal data={mens_kurta} sectionName={"Men's Shirts"} />
        <HomeSectionCarousal data={mens_kurta} sectionName={"Women's Saree"} />
        <HomeSectionCarousal data={mens_kurta} sectionName={"Women's Dress"} />
      </div>
    </div>
  );
};

export default HomePage;
