"use client";

import "./CarList.scss";
import CarCard from "@/entities/CarCard/CarCard";
import { cars } from "./variables";
import { useState } from "react";

const CarList = () => {
  const [mode, setMode] = useState<boolean>(false);

  return (
    <div className="car-list">
      <div className="car-list__mode">
        <h3>Режим отображения</h3>

        <div className="car-list__mode_right">
          <button
            onClick={() => setMode(false)}
            className={`car-list__mode-grid${mode ? "" : "_active"}`}
          >
            {[0, 1, 2, 3].map((block) => (
              <div key={block} />
            ))}
          </button>
          <button
            onClick={() => setMode(true)}
            className={`car-list__mode-list${mode ? "_active" : ""}`}
          >
            {[0, 1, 3].map((block) => (
              <div key={block}>
                <div></div>
                <div></div>
              </div>
            ))}
          </button>
        </div>
      </div>
      <div className={`car-list__wrapper-${mode ? "list" : "grid"}`}>
        {cars.map((car) => (
          <CarCard key={car.id} card={car} mode={mode} />
        ))}
      </div>
    </div>
  );
};

export default CarList;
