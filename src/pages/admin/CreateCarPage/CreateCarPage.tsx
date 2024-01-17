"use client";

import "./CreateCarPage.scss";
import AdminHeader from "@/entities/AdminHeader/AdminHeader";
import Select from "@/entities/Select/Select";
import { useState } from "react";

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

  const brands = [
    "Audi",
    "BMW",
    "Lexus",
    "Mercedes-Benz",
    "Porsche",
    "Range Rover",
    "Toyota",
    "Volkswagen",
    "Volvo",
  ];

  const typeOptions = ["В наличии", "Под заказ"];

  const yearOptions = ["2019", "2020", "2021", "2022", "2023"];

  const bodyColorOptions = [
    "Белый",
    "Зеленый металлик",
    "Изумрудный",
    "Серебристый",
    "Серый",
    "Серый бруклин",
    "Синий",
    "Темно-серый металлик",
    "Темно-синий",
    "Черно-зеленый",
    "Черный",
    "Черный металлик",
  ];

  const interiorColorOptions = [
    "Бежевый",
    "Белый",
    "Коричневый",
    "Красный",
    "Серый",
    "Черно-белый",
    "Черный",
  ];

  const interiorMaterialOptions = [
    "Алькантара",
    "Искусственная кожа",
    "Кожа",
    "Кожа + вставки из Алькантары",
    "Комбинированный / Ткань",
    "Ткань",
  ];

  const engineOptions = [
    "190 л.с.",
    "197 л.с. / 2.0 л",
    "2.0 л / 249 л.с. / Quattro",
    "2.9 л",
    "3.0 л / 340 л.с. / бензин",
  ];

  const transmissionOptions = [
    "7-ступенчатая робот",
    "9-ступенчатая автоматическая коробка передач",
    "Автоматическая",
    "8-ступенчатая автоматическая",
  ];

  const additionalOptions = [
    "Carplay| Android, круиз-контроль, камера 360°, фаркоп, адаптивный круиз-контроль Plus, активная помощь при парковке, электрорегулировка передних сидений, активная система удержания полосы движения, электрохромное зеркало",
  ];

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
          value={model}
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
