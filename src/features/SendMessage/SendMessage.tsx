"use client";

import "./SendMessage.scss";
import Image from "next/image";
import message_icon from "../../shared/icons/send-icon.svg";
import CircleButton from "@/shared/UI/CircleButton/CircleButton";
import { useState } from "react";
import close_icon from "../../shared/icons/close-icon.svg";
import check_icon from "../../shared/icons/check-icon.svg";
import InputWithLabel from "@/entities/InputWithLabel/InputWithLabel";

const SendMessage = () => {
  const [popUp, setPopUp] = useState<boolean>(false);
  const [checkbox, setCheckbox] = useState<boolean>(false);
  const openPopUp = () => {
    setPopUp(true);
  };
  return (
    <>
      <CircleButton icon={message_icon} handleClick={openPopUp} />
      {popUp && (
        <div onClick={() => setPopUp(false)} className="send-message">
          <div
            onClick={(e) => e.stopPropagation()}
            className="send-message__form"
          >
            <div className="send-message__header">
              <p>Задать вопрос</p>
              <button onClick={() => setPopUp(false)}>
                <Image
                  src={close_icon}
                  alt="close icon"
                  width={30}
                  height={30}
                />
              </button>
            </div>
            <p className="send-message__description">
              Менеджеры компании с радостью ответят на ваши вопросы и
              произведут расчет стоимости услуг и подготовят
              индивидуальное коммерческое предложение.
            </p>

            <InputWithLabel label="Ваше имя" required />
            <InputWithLabel label="Телефон" required />

            <div className="send-message__agreement">
              <button onClick={() => setCheckbox((prev) => !prev)}>
                {checkbox && (
                  <Image
                    src={check_icon}
                    alt="Check Icon"
                    width={24}
                    height={24}
                  />
                )}
              </button>
              <p>Я согласен на обработку моих персональных данных</p>
            </div>

            <button className="send-message__btn">Отправить</button>
          </div>
        </div>
      )}
    </>
  );
};

export default SendMessage;
