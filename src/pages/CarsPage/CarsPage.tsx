"use client";

import "./CarsPage.scss";
import filter from "../../shared/icons/filter.svg";
import Image from "next/image";
import Select from "@/entities/Select/Select";
import { useState } from "react";
import {
  adds,
  cars,
  colors,
  engines,
  innerColors,
  korobkas,
  marks,
  mats,
  sortByNameOptions,
  sortByPopularOptions,
  sortByPriceOptions,
  statuses,
  years,
} from "./variables";
import Link from "next/link";

const CarsPage = () => {
  const [sortByName, setSortByName] = useState<string[]>([]);
  const [sortByPopular, setSortByPopular] = useState<string[]>([]);
  const [sortByPrice, setSortByPrice] = useState<string[]>([]);
  const [mark, setMark] = useState<string[]>([]);
  const [status, setStatus] = useState<string[]>([]);
  const [year, setYear] = useState<string[]>([]);
  const [color, setColor] = useState<string[]>([]);
  const [innerColor, setInnerColor] = useState<string[]>([]);
  const [mat, setMat] = useState<string[]>([]);
  const [engine, setEngine] = useState<string[]>([]);
  const [korobka, setKorobka] = useState<string[]>([]);
  const [additional, setadditional] = useState<string[]>([]);

  return (
    <div className="cars-page">
      <h2>Витрина автомобилей</h2>
      <div className="cars-page__dashboard">
        <h3>
          <p>Фильтры</p>
          <Image src={filter} alt="filter icon" />
        </h3>
        <Select
          options={sortByNameOptions}
          placeholder="По наименованию"
          handleSelect={setSortByName}
          value={sortByName}
        />
        <Select
          options={sortByPopularOptions}
          placeholder="По популярности"
          handleSelect={setSortByPopular}
          value={sortByPopular}
        />
        <Select
          options={sortByPriceOptions}
          placeholder="По цене"
          handleSelect={setSortByPrice}
          value={sortByPrice}
        />

        <Select
          options={marks}
          placeholder="Марка"
          handleSelect={setMark}
          value={mark}
        />
        <Select
          options={statuses}
          placeholder="Статус"
          handleSelect={setStatus}
          value={status}
        />
        <Select
          options={years}
          placeholder="Год выпуска"
          handleSelect={setYear}
          value={year}
        />
        <Select
          options={colors}
          placeholder="Цвет кузова"
          handleSelect={setColor}
          value={color}
        />
        <Select
          options={innerColors}
          placeholder="Цвет салона"
          handleSelect={setInnerColor}
          value={innerColor}
        />
        <Select
          options={mats}
          placeholder="Материалы салона"
          handleSelect={setMat}
          value={mat}
        />
        <Select
          options={engines}
          placeholder="Двигатель"
          handleSelect={setEngine}
          value={engine}
        />
        <Select
          options={korobkas}
          placeholder="Коробка"
          handleSelect={setKorobka}
          value={korobka}
        />
        <Select
          options={adds}
          placeholder="Доп. опции"
          handleSelect={setadditional}
          value={additional}
        />
      </div>
      <div className="cars-page__list">
        {cars.map((car) => (
          <div className="car-card" key={car.id}>
            <Link href={`/cars/${car.id}`}>
              <Image src={car.img} alt="car image" />
            </Link>

            <div className="car-card__text">
              <h4>{car.title}</h4>
              <p
                className={`car-card__text-${
                  car.status ? "stock" : "order"
                }`}
              >
                {car.status ? "• В наличии" : "• Под заказ"}
              </p>
            </div>
            <div className="car-card__price-n-btn">
              <p>{car.price}$</p>
              <button>Заказать</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarsPage;
