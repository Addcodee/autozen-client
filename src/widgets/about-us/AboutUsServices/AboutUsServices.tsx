import Image from "next/image";
import "./AboutUsServices.scss";
import containers from "./assets/containers.jpg";
import expert from "./assets/expert.jpg";
import Link from "next/link";

const AboutUsServices = () => {
  return (
    <div className="about-us-services">
      <h3>Наши услуги</h3>
      <div className="about-us-services__item">
        <Image src={expert} alt="Expert Image" placeholder="blur" />

        <h4>Выкуп автомобилей</h4>
        <p>
          Мы осуществляем выкуп автомобилей из различных стран,
          включая Китай, Южную Корею, Дубай, США и страны Европы.
          Независимо от того, какие марки и модели автомобилей вас
          интересуют, наши эксперты найдут и приобретут их для вас.
        </p>
        <Link href={"/buying-process"}>Подробнее</Link>
      </div>
      <div className="about-us-services__item">
        <Image
          src={containers}
          alt="Containers Image"
          placeholder="blur"
        />
        <h4>Логистика и доставка</h4>
        <p>
          Наша компания обладает собственной логистической сетью,
          которая обеспечивает надежную и безопасную доставку
          автомобилей к вам в кратчайшие сроки. Мы берем на себя все
          аспекты оформления и перевозки, чтобы вы могли
          сосредоточиться на своих делах.
        </p>
        <Link href={"/logistics"}>Подробнее</Link>
      </div>
    </div>
  );
};

export default AboutUsServices;
