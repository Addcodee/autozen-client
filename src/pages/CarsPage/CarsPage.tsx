import "./CarsPage.scss";
import CarDashboard from "@/widgets/CarDashboard/CarDashboard";
import CarList from "@/widgets/CarList/CarList";

const CarsPage = () => {
  return (
    <div className="cars-page">
      <h2>Витрина автомобилей</h2>
      <CarDashboard />
      <CarList />
    </div>
  );
};

export default CarsPage;
