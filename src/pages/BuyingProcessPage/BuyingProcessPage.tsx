import PageHeader from "@/widgets/general/PageHeader/PageHeader";
import "./BuyingProcessPage.scss";
import trains from "./assets/trains.jpg";
import _1 from "./assets/1.jpg";
import _2 from "./assets/2.jpg";
import _3 from "./assets/3.jpg";
import _4 from "./assets/4.jpg";
import _5 from "./assets/5.jpeg";
import _6 from "./assets/6.jpg";
import Image from "next/image";

const BuyingProcessPage = () => {
  const processes = [
    {
      id: 1,
      title: "Консультация и Планирование ",
      description:
        "Наши эксперты обсудят ваши требования, предпочтения и бюджет, чтобы лучше понять, какой автомобиль подойдет именно вам. Мы также расскажем вам о доступных опциях транспортировки и подготовим план действий.",
      img: _1,
    },
    {
      id: 2,
      title: "Подбор Автомобиля ",
      description:
        "С учетом ваших предпочтений, мы начнем поиск автомобилей на рынках Южной Кореи и Китая. Мы предоставим вам список доступных вариантов с детальными характеристиками и фотографиями, чтобы вы могли сделать правильный выбор.",
      img: _2,
    },
    {
      id: 3,
      title: "Выкуп и Подготовка к Транспортировке",
      description:
        "По вашему согласию, мы организуем выкуп выбранного автомобиля. После этого начнется процесс подготовки к транспортировке, включая тщательную проверку автомобиля на состояние и оформление всех необходимых документов.",
      img: _3,
    },
    {
      id: 4,
      title: "Транспортировка и Отслеживание",
      description:
        "Мы выберем оптимальный маршрут и способ транспортировки в зависимости от вашей географической локации. Все этапы транспортировки будут тщательно отслеживаться, чтобы обеспечить безопасность вашего автомобиля.",
      img: _4,
    },
    {
      id: 5,
      title: "Таможенное Оформление и Доставка",
      description:
        "Наши специалисты займутся таможенным оформлением автомобиля, гарантируя его легальность и соответствие всем требованиям. После прохождения таможни, автомобиль будет доставлен вам в указанное место.",
      img: _5,
    },
    {
      id: 6,
      title: "Передача и Удовлетворенность",
      description:
        "Мы организуем передачу автомобиля вам лично, обеспечивая вас всей необходимой документацией и ключами. Ваше удовлетворение - наша главная цель, и мы готовы ответить на все вопросы и решить все возникающие вопросы.",
      img: _6,
    },
  ];
  return (
    <div className="buying-process">
      <PageHeader
        background={trains}
        title="Выкуп авто"
        description="Процесс транспортировки и выкупа автомобилей"
      />

      <ul className="buying-process__list">
        {processes.map((process) => (
          <li key={process.id}>
            <Image
              src={process.img}
              alt="Process Image"
              placeholder="blur"
            />
            <div className="buying-process__header">
              <h4>{process.title}</h4>
              <b>0{process.id}</b>
            </div>
            <p>{process.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BuyingProcessPage;
