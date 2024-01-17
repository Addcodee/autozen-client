import "./AboutUsWhyUs.scss";
import { reasons } from "./variables";
import Image from "next/image";

const AboutUsWhyUs = () => {
  return (
    <div className="about-us-why-us">
      <h3>Почему выбирают нас?</h3>
      <div className="about-us-why-us__list">
        {reasons.map((reason, index) => (
          <div
            className={`about-us-why-us__item_${
              (index + 1) % 2 ? "odd" : "even"
            }`}
            key={reason.id}
          >
            <Image src={reason.img} alt="Benefit Image" />
            <div className="about-us-why-us__text">
              <h4>{reason.title}</h4>
              <p>{reason.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUsWhyUs;
