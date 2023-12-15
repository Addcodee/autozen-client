import Image from "next/image";
import "./CarCard.scss";
import car_image from "./assets/car-image.jpg";

const CarCard = () => {
  return (
    <div className="carCard">
      <Image
        src={car_image}
        alt="Car Image"
        className="carCard__image"
        placeholder="blur"
      />

      <div className="carCard__text">
        <h5>Mercedes-Benz GLC</h5>
        <p>• В наличии</p>
      </div>

      <div className="carCard__price">
        <p>15.450.000 $</p>
        <button>Заказать</button>
      </div>
    </div>
  );
};

export default CarCard;
