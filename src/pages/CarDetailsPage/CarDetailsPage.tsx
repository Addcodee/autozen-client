import CarHeader from "@/widgets/car-details/CarHeader/CarHeader";
import "./CarDetailsPage.scss";
import CarImages from "@/widgets/car-details/CarImages/CarImages";
import CarActions from "@/widgets/car-details/CarActions/CarActions";
import CarParams from "@/widgets/car-details/CarParams/CarParams";

const CarDetailsPage = () => {
  return (
    <div className="car-details-page">
      <CarHeader />
      <CarImages />
      <div className="car-details-page__container">
        <CarParams />
        <CarActions />
      </div>
    </div>
  );
};

export default CarDetailsPage;
