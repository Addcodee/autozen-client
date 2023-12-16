"use client";

import { useState } from "react";
import "./Cases.scss";
import Image from "next/image";
import BMW from "./assets/bmw.jpg";
import Audi from "./assets/audi.jpg";
import Volvo from "./assets/volvo.jpg";
import chevron_right from "../../shared/icons/chevron-right-icon.svg";
import chevron_left from "../../shared/icons/chevron-left-icon.svg";

const Cases = () => {
  const [location, setLocation] = useState<string>("kor");
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const cases = [
    {
      id: 1,
      mark: "BMW",
      model: "850i",
      year: "2019",
      probeg: "2304",
      engine: "530 л.с",
      transmission: "Авто",
      privod: "Полный",
      img: BMW,
    },
    {
      id: 2,
      mark: "Audi",
      model: "Q7",
      year: "2022",
      probeg: "6000",
      engine: "3.0 / 286 л.с / Дизель",
      transmission: "Авто 8-ступенчатая",
      privod: "Полный",
      img: Audi,
    },
    {
      id: 3,
      mark: "Volvo",
      model: "XC 90",
      year: "2021",
      probeg: "13.600",
      engine: "2.0 / 235 л.с / бензин",
      transmission: "Авто 8-ступенчатая",
      privod: "Полный",
      img: Volvo,
    },
  ];
  const nextSlide = () => {
    if (slideIndex === cases.length - 1) {
      setSlideIndex(0);
    } else {
      setSlideIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (slideIndex === 0) {
      setSlideIndex(cases.length - 1);
    } else {
      setSlideIndex((prev) => prev - 1);
    }
  };
  return (
    <div className="cases">
      <div className="cases__header">
        <h3>Наши кейсы</h3>
        <div></div>
        <p>Уже 1500 клиентов получили свой автомобиль</p>
      </div>
      <div className="cases__filters">
        <button
          onClick={() => setLocation("kor")}
          className={`cases__location${
            location === "kor" ? "_active" : ""
          }`}
        >
          Корея
        </button>
        <button
          onClick={() => setLocation("ch")}
          className={`cases__location${
            location === "ch" ? "_active" : ""
          }`}
        >
          Китай
        </button>
        <button
          onClick={() => setLocation("eu")}
          className={`cases__location${
            location === "eu" ? "_active" : ""
          }`}
        >
          Европа
        </button>
      </div>

      <div className="cases__slider">
        {cases.map((car) => (
          <div
            key={car.id}
            style={{ translate: `${-100 * slideIndex}%` }}
            className="cases__slider-wrapper"
          >
            <div className="cases__image">
              <Image
                src={car.img}
                alt="BMW Image"
                placeholder="blur"
                fill
              />
            </div>

            <div className="cases__params">
              <ul>
                <li>
                  <p>Марка:</p> <p>{cases[slideIndex].mark}</p>
                </li>
                <li>
                  <p>Модель:</p> <p>{cases[slideIndex].model}</p>
                </li>
                <li>
                  <p>Год:</p> <p>{cases[slideIndex].year}</p>
                </li>
                <li>
                  <p>Пробег:</p> <p>{cases[slideIndex].probeg}</p>
                </li>
                <li>
                  <p>Двигатель:</p> <p>{cases[slideIndex].engine}</p>
                </li>
                <li>
                  <p>Трансмиссия:</p>{" "}
                  <p>{cases[slideIndex].transmission}</p>
                </li>
                <li>
                  <p>Привод:</p> <p>{cases[slideIndex].privod}</p>
                </li>
              </ul>
              <button>Подробнее</button>
            </div>
          </div>
        ))}

        <div className="cases__slider-arrows">
          <button onClick={prevSlide}>
            <Image
              src={chevron_left}
              alt="Left Chevron Icon"
              width={50}
              height={50}
            />
          </button>
          <button onClick={nextSlide}>
            <Image
              src={chevron_right}
              alt="Right Chevron Icon"
              width={50}
              height={50}
            />
          </button>
        </div>
      </div>
      <div className="cases__slider-pagination">
        {cases.map((car) => (
          <button
            className={`cases__slider-pagination__item${
              slideIndex === car.id - 1 ? "_active" : ""
            }`}
            key={car.id}
            onClick={() => setSlideIndex(car.id - 1)}
          />
        ))}
      </div>
    </div>
  );
};

export default Cases;
