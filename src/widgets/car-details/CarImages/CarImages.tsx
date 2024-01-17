import "./CarImages.scss";
import _1 from "./assets/1.jpg";
import _2 from "./assets/2.jpg";
import _3 from "./assets/3.jpg";
import Image from "next/image";

const CarImages = () => {
  return (
    <div className="car-images">
      <div className="car-images__container">
        <Image src={_1} alt="Car Image" placeholder="blur" />
        <Image src={_2} alt="Car Image" placeholder="blur" />
        <Image src={_3} alt="Car Image" placeholder="blur" />
      </div>
      <p>*Кликните на фото или на этот текст, чтобы увидеть больше</p>
    </div>
  );
};

export default CarImages;
