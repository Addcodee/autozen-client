import CarDashboard from "@/widgets/cars/CarDashboard/CarDashboard";
import "./CarsPage.scss";
import CarList from "@/widgets/cars/CarList/CarList";
import PageHeader from "@/widgets/general/PageHeader/PageHeader";
import background from "./assets/background.jpg";

const CarsPage = () => {
  return (
    <div className="cars-page">
      <PageHeader
        background={background}
        title="Витрина авто"
        description="Здесь вы можете подобрать наиболее подходящий вариант"
      />
      <div className="cars-page__container">
        <CarDashboard />
        <CarList />
      </div>
    </div>
  );
};

export default CarsPage;
