import Image from "next/image";
import "./AboutUsBenefits.scss";
import { benefits } from "./variables";

const AboutUsBenefits = () => {
  return (
    <div className="about-us-benefits">
      <h3>Уникальные преимущества компании AutoZen</h3>
      <ul className="about-us-benefits__list">
        {benefits.map((benefit) => (
          <li key={benefit.id}>
            <div className="about-us-benefits__icon">
              <Image src={benefit.icon} alt="Benefit Icon" />
            </div>
            <div>
              <h4>{benefit.title}</h4>
              <p>{benefit.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutUsBenefits;
