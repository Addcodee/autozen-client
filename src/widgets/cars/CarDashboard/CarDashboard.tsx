"use client";

import "./CarDashboard.scss";
import Select from "@/entities/Select/Select";
import { useState } from "react";
import {
  adds,
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
import filter from "../../../shared/icons/filter.svg";
import Image from "next/image";

type option = string | string[];

const CarDashboard = () => {
  const [sortByName, setSortByName] = useState<option>([]);
  const [sortByPopular, setSortByPopular] = useState<option>([]);
  const [sortByPrice, setSortByPrice] = useState<option>([]);
  const [mark, setMark] = useState<option>([]);
  const [status, setStatus] = useState<option>([]);
  const [year, setYear] = useState<option>([]);
  const [color, setColor] = useState<option>([]);
  const [innerColor, setInnerColor] = useState<option>([]);
  const [mat, setMat] = useState<option>([]);
  const [engine, setEngine] = useState<option>([]);
  const [korobka, setKorobka] = useState<option>([]);
  const [additional, setadditional] = useState<option>([]);

  return (
    <div className="car-dashboard">
      <h3>
        <p>Фильтры</p>
        <button>
          <Image src={filter} alt="filter icon" />
        </button>
      </h3>
      <div className="car-dashboard__filters">
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
    </div>
  );
};

export default CarDashboard;
