"use client";

import { useEffect, useState } from "react";
import "./AboutUsHeader.scss";

const AboutUsHeader = () => {
  const [headerStyle, setHeaderStyle] = useState<boolean>(false);
  const handleScroll = () => {
    if (window.scrollY <= 0) {
      setHeaderStyle(false);
    } else {
      setHeaderStyle(true);
    }
  };

  useEffect(() => {
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={`about-us-header${headerStyle ? "-scroll" : ""}`}>
      <h2>Autozen</h2>

      <p>
        Мы - компания AUTOZEN, специализирующаяся на выкупе и доставке
        автомобилей со всего мира. Наш опыт и профессиональный подход
        позволяют нам предоставить вам надежные и удобные услуги,
        связанные с автомобильным импортом. Мы понимаем, что
        приобретение и доставка автомобилей из-за границы могут быть
        сложными задачами, и именно поэтому мы здесь, чтобы облегчить
        этот процесс для вас.
      </p>
    </div>
  );
};

export default AboutUsHeader;
