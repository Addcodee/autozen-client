"use client";

import Select from "@/entities/Select/Select";
import "./CarPicker.scss";
import { useState } from "react";

const CarPicker = () => {
  const [mark, setMark] = useState<string[]>([""]);
  const [model, setModel] = useState<string[]>([""]);
  const [generation, setGeneration] = useState<string[]>([""]);
  const [deliveryType, setDeliveryType] = useState<string[]>([""]);
  const [destination, setDestination] = useState<string[]>([""]);
  const [result, setResult] = useState<boolean>(false);

  const marks = ["BMW", "Audi", "Mercedes-Benz"];
  const models = ["GLK", "RX", "Ji Tong"];
  const generations = ["2019", "2020", "2022"];
  const deliveryTypes = [
    "Доставка до указанного адреса",
    "Самовызов",
  ];
  const destinations = [
    "Москва",
    "Санкт-Петербург",
    "Казань",
    "Новгород",
  ];

  const clearParams = () => {
    setMark([""]);
    setModel([""]);
    setGeneration([""]);
    setDeliveryType([""]);
    setDestination([""]);
  };

  return (
    <div className="car-picker">
      <h3>Подберите свои параметры и узнайте цену на авто</h3>
      <div className="car-picker__params">
        <Select
          options={marks}
          placeholder="Марка"
          handleSelect={setMark}
          value={mark}
        />
        <Select
          options={models}
          placeholder="Модель"
          handleSelect={setModel}
          value={model}
        />
        <Select
          options={generations}
          placeholder="Поколение"
          handleSelect={setGeneration}
          value={generation}
        />
        <Select
          options={deliveryTypes}
          placeholder="Тип доставки"
          handleSelect={setDeliveryType}
          value={deliveryType}
        />
        <Select
          options={destinations}
          placeholder="Пункт назначения"
          handleSelect={setDestination}
          value={destination}
        />
        <div className="car-picker__actions">
          <button
            className="car-picker__actions_left"
            onClick={clearParams}
          >
            Отменить
          </button>
          <button
            className="car-picker__actions_right"
            onClick={() => setResult(true)}
          >
            Рассчитать
          </button>
        </div>
      </div>
      <div className="car-picker_right">
        {result ? (
          <div className="car-picker__result">
            <h5>Результат:</h5>
            <ul>
              <li>
                <p>Марка:</p>
                <p>BMW</p>
              </li>
              <li>
                <p>Модель:</p>
                <p>M5</p>
              </li>
              <li>
                <p>Поколение:</p>
                <p>2003</p>
              </li>
              <li>
                <p>Тип доставки:</p>
                <p>Самовызов</p>
              </li>
              <li>
                <p>Пункт назначения:</p>
                <p>Москва</p>
              </li>
            </ul>
            <h6>Итоговая Цена: 101.401$</h6>
          </div>
        ) : (
          <div className="car-picker__message">
            <h4>
              Выберите свои параметры и мы подберем для вас подходящее
              Авто!
            </h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarPicker;
