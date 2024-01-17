"use client";

import Image from "next/image";
import "./Header.scss";
import background from "./assets/background.jpg";
import { useState } from "react";
import SendMessage from "@/features/SendMessage/SendMessage";
import { bodyOverflow } from "@/shared/helpers";

const Header = () => {
  const [popUp, setPopUp] = useState<boolean>(false);
  return (
    <header className="header">
      <Image
        className="header__background"
        src={background}
        alt="Header Background"
        fill
        placeholder="blur"
      />
      <div className="header__gradient"></div>

      <div className="header__title-click">
        <div className="header__title-click_top">
          <h1>Широкий выбор</h1>
          <p>
            Закажи понравившуюся машину в пару кликов не выходя из
            дома
          </p>
        </div>
        <button
          onClick={() => {
            setPopUp(true);
            bodyOverflow("hidden");
          }}
        >
          Оставить заявку
        </button>
      </div>
      {popUp && <SendMessage closePopUp={setPopUp} />}
    </header>
  );
};

export default Header;
