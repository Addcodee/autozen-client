import PageHeader from "@/widgets/general/PageHeader/PageHeader";
import "./ServicesPage.scss";
import background from "./assets/background.jpg";
import containers from "./assets/containers.jpg";
import expert from "./assets/expert.jpg";
import Image from "next/image";
import Link from "next/link";

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      title: "Выкуп автомобилей",
      description:
        "Мы осуществляем выкуп автомобилей из различных стран, включая Китай, Южную Корею, Дубай, США и страны Европы. Независимо от того, какие марки и модели автомобилей вас интересуют, наши эксперты найдут и приобретут их для вас.",
      img: containers,
      path: "/buying-process",
    },
    {
      id: 2,
      title: "Логистика и доставка",
      description:
        "Наша компания обладает собственной логистической сетью, которая обеспечивает надежную и безопасную доставку автомобилей к вам в кратчайшие сроки. Мы берем на себя все аспекты оформления и перевозки, чтобы вы могли сосредоточиться на своих делах.",
      img: expert,
      path: "logistics",
    },
  ];
  return (
    <div className="services-page">
      <PageHeader
        background={background}
        title="Услуги"
        description="То, что вы можете от нас ожидать"
      />
      <ul className="services-page__list">
        {services.map((service) => (
          <li className="services-page__item" key={service.id}>
            <Image src={service.img} alt="Service Image" />
            <div className="services-page__text">
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </div>
            <Link href={service.path}>Подробнее</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServicesPage;
