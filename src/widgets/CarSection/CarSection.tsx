import CarCard from "@/entities/CarCard/CarCard";
import "./CarSection.scss";

const CarSection = () => {
  return (
    <div className="car-section">
      <h3>Автомобили</h3>

      <div className="car-section__list">
        <CarCard />
        <CarCard />
        <CarCard />
      </div>
    </div>
  );
};

export default CarSection;
