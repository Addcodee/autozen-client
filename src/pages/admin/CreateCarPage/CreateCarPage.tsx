"use client";

import "./CreateCarPage.scss";
import AdminHeader from "@/entities/AdminHeader/AdminHeader";
import Select from "@/entities/Select/Select";
import { useState } from "react";
import {
  additionalOptions,
  bodyColorOptions,
  brands,
  engineOptions,
  interiorColorOptions,
  interiorMaterialOptions,
  transmissionOptions,
  typeOptions,
  yearOptions,
} from "./variables";
import InputWithLabel from "@/entities/InputWithLabel/InputWithLabel";
import Switcher from "@/entities/Switcher/Switcher";

type option = string | string[];

const CreateCarPage = () => {
  const [mark, setMark] = useState<option>("");
  const [model, setModel] = useState<string>("");
  const [year, setYear] = useState<option>("");
  const [type, setType] = useState<option>("");
  const [bodyColor, setBodyColor] = useState<option>("");
  const [interiorColor, setInteriorColor] = useState<option>("");
  const [interiorMaterial, setInteriorMaterial] =
    useState<option>("");
  const [engine, setEngine] = useState<option>("");
  const [transmission, setTransmission] = useState<option>("");
  const [additional, setAdditional] = useState<option>([]);

  return (
    <div className="create-car-page">
      <AdminHeader header="Добавить автомобиль" />

      <div className="create-car-page">
        <Select
          options={brands}
          placeholder="Марка машины"
          handleSelect={setMark}
          value={mark}
          theme="dark"
        />
        <InputWithLabel
          theme="dark"
          label="Модель"
          onChange={(e) => setModel(e.target.value)}
        />
        <Select
          options={typeOptions}
          placeholder="Статус машины"
          handleSelect={setType}
          value={type}
          theme="dark"
        />
        <Select
          options={yearOptions}
          placeholder="Год выпуска"
          handleSelect={setYear}
          value={year}
          theme="dark"
        />
        <Select
          options={bodyColorOptions}
          placeholder="Цвет кузова"
          handleSelect={setBodyColor}
          value={bodyColor}
          theme="dark"
        />
        <Select
          options={interiorColorOptions}
          placeholder="Цвет салона"
          handleSelect={setInteriorColor}
          value={interiorColor}
          theme="dark"
        />

        <Select
          options={interiorMaterialOptions}
          placeholder="Материалы салона"
          handleSelect={setInteriorMaterial}
          value={interiorMaterial}
          theme="dark"
        />
        <Select
          options={engineOptions}
          placeholder="Двигатель"
          handleSelect={setEngine}
          value={engine}
          theme="dark"
        />
        <Select
          options={transmissionOptions}
          placeholder="Коробка"
          handleSelect={setTransmission}
          value={transmission}
          theme="dark"
        />
        <Select
          options={additionalOptions}
          placeholder="Доп. опции"
          handleSelect={setAdditional}
          value={additional}
          theme="dark"
        />

        <Switcher label="В наличии" />
      </div>
    </div>
  );
};

export default CreateCarPage;
