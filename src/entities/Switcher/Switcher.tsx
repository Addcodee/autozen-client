"use client";

import { useState } from "react";
import "./Switcher.scss";

interface ISwitcher {
  label?: string;
  defaultState?: boolean;
}

const Switcher: React.FC<ISwitcher> = ({
  label,
  defaultState,
}: ISwitcher) => {
  const [switcher, setSwitcher] = useState<boolean>(
    defaultState || false
  );
  return (
    <div className="switcher">
      {label && <h4>{label}</h4>}
      <button
        className={
          switcher ? "switcher__btn" : "switcher__btn_active"
        }
        onClick={() => setSwitcher((prev) => !prev)}
      >
        <div></div>
      </button>
    </div>
  );
};

export default Switcher;
