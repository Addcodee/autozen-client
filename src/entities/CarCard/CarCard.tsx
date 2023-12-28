import "./CarCardGrid.scss";
import "./CarCardList.scss";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface CarCardProps {
  card: ICarCard;
  mode: boolean;
}

interface ICarCard {
  id: number;
  img: StaticImageData;
  title: string;
  status: boolean;
  price: number;
}

const CarCard: React.FC<CarCardProps> = ({
  card,
  mode,
}: CarCardProps) => {
  const { id, img, title, status, price } = card;
  return (
    <div className={`car-card-${mode ? "list" : "grid"}`}>
      <Link href={`/cars/${id}`}>
        <Image src={img} alt="car image" />
      </Link>

      <div className={`car-card-${mode ? "list" : "grid"}__text`}>
        <h4>{title}</h4>
        <p
          className={`car-card-${mode ? "list" : "grid"}__text-${
            status ? "stock" : "order"
          }`}
        >
          {status ? "• В наличии" : "• Под заказ"}
        </p>
      </div>
      <div
        className={`car-card-${mode ? "list" : "grid"}__price-n-btn`}
      >
        <p>{price}$</p>
        <button>Заказать</button>
      </div>
    </div>
  );
};

export default CarCard;
