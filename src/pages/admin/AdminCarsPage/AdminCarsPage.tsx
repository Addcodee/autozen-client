"use client";

import Link from "next/link";
import "./AdminCarsPage.scss";
import { useState } from "react";
import Checkbox from "@/shared/UI/Checkbox/Checkbox";
import AdminHeader from "@/entities/AdminHeader/AdminHeader";

const AdminCarsPage = () => {
  const [select, setSelect] = useState<boolean>(false);
  return (
    <div className="admin-cars-page">
      <div className="admin-cars-page__header">
        <AdminHeader header="Автомобили" />
        <Link
          className="outline-btn-green"
          href={"/admin/autos/create"}
        >
          Добавить Автомобиль
        </Link>
      </div>
      <div className="admin-cars-page__actions">
        <button
          className="outline-btn-blue"
          onClick={() => setSelect((prev) => !prev)}
        >
          Выбрать
        </button>
        <button
          className={select ? "outline-btn-red" : "outline-btn-grey"}
        >
          Удалить
        </button>
        <p>Выбрано элементов: 0</p>
      </div>

      <ul className="admin-cars-page__params">
        <li>{select && <Checkbox />}</li>
        <li>Nr.</li>
        <li>Марка</li>
        <li>Модель</li>
        <li>Год</li>
        <li>Цена</li>
        <li>Тип</li>
      </ul>

      <div className="admin-cars-page__list">
        {[0, 1, 2].map((num) => (
          <ul key={num}>
            <li>{select && <Checkbox />}</li>
            <li>{num + 1}</li>
            <li>Kia</li>
            <li>Seltos K5</li>
            <li>2022</li>
            <li>23.100</li>
            <li>Под заказ</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default AdminCarsPage;
