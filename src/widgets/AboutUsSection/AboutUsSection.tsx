import "./AboutUsSection.scss";
import Image from "next/image";
import man from "./assets/man.jpg";
import case_icon from "../../shared/icons/case-icon.svg";
import car_icon from "../../shared/icons/car-icon.svg";
import smile_icon from "../../shared/icons/smile-icon.svg";

const AboutUsSection = () => {
  const stats = [
    {
      id: 1,
      title: "КОМПАНИЯ НА РЫНКЕ С",
      description: "2013 года",
      icon: case_icon,
    },
    {
      id: 2,
      title: "УСПЕШНО ПОСТАВЛЯЕМ",
      description: "50 автомобилей в месяц",
      icon: car_icon,
    },
    {
      id: 3,
      title: "ДОВОЛЬНЫХ КЛИЕНТОВ",
      description: "1359",
      icon: smile_icon,
    },
  ];
  return (
    <div className="about-us-section">
      <div className="about-us-section__information">
        <h3>О нас</h3>
        <p>
          Мы находим эксклюзивные комплектации по запросу клиента и
          просто автомобили, которых нет в продаже в России. При этом
          не завышаем цену и не придумываем непонятных схем.
        </p>
        <p>
          Ценим время и доверие клиентов, поэтому честно говорим о
          комиссии.
        </p>
      </div>
      <div className="about-us-section__list">
        {stats.map((stat) => (
          <div key={stat.id} className="about-us-section__item">
            <div className="about-us-section__item_left">
              <Image
                src={stat.icon}
                alt="stat icon"
                width={24}
                height={24}
              />
            </div>
            <div className="about-us-section__item_right">
              <h5>{stat.title}</h5>
              <p>{stat.description}</p>
            </div>
          </div>
        ))}
        <button>Подробнее</button>
      </div>
      <div className="about-us-section__image">
        <Image
          src={man}
          alt="Man with Laptop"
          placeholder="blur"
          fill
        />
      </div>
    </div>
  );
};

export default AboutUsSection;
