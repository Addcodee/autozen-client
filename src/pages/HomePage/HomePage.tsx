import AboutUsSection from "@/widgets/AboutUsSection/AboutUsSection";
import CarPicker from "@/widgets/CarPicker/CarPicker";
import CarSection from "@/widgets/CarSection/CarSection";
import Cases from "@/widgets/Cases/Cases";
import Header from "@/widgets/Header/Header";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Header />
      <CarSection />
      <AboutUsSection />
      <Cases />
      <CarPicker />
    </div>
  );
};

export default HomePage;
