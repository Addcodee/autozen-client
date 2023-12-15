"use client";

import "./SendMessage.scss";
import Image from "next/image";
import { useState } from "react";
import close_icon from "../../shared/icons/close-icon.svg";
import check_icon from "../../shared/icons/check-icon.svg";
import InputWithLabel from "@/entities/InputWithLabel/InputWithLabel";

interface ISendMessageProps {
  closePopUp: (boolean: boolean) => void;
}

const SendMessage: React.FC<ISendMessageProps> = ({
  closePopUp,
}: ISendMessageProps) => {
  const [checkbox, setCheckbox] = useState<boolean>(false);

  return (
    <div onClick={() => closePopUp(false)} className="send-message">
      <div
        onClick={(e) => e.stopPropagation()}
        className="send-message__form"
      >
        <div className="send-message__header">
          <p>Задать вопрос</p>
          <button onClick={() => closePopUp(false)}>
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
  );
};

export default SendMessage;
