import AboutUsSection from "@/widgets/landing/AboutUsSection/AboutUsSection";
import AboutUsWhyUs from "@/widgets/landing/AboutUsWhyUs/AboutUsWhyUs";
import CarPicker from "@/widgets/landing/CarPicker/CarPicker";
import Cases from "@/widgets/landing/Cases/Cases";
import Header from "@/widgets/landing/Header/Header";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Cases />
      <AboutUsWhyUs />
      <CarPicker />
      <AboutUsSection />
    </div>
  );
};

export default HomePage;
