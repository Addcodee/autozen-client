import byd from "./assets/byd.jpg";
import bmw from "./assets/bmw.jpg";
import kia from "./assets/kia.jpg";

export const cars = [
  {
    id: 1,
    img: kia,
    title: "Kia Seltos K5",
    price: 120000,
    status: false,
  },
  {
    id: 2,
    img: byd,
    title: "BYD Seal Plus",
    price: 100000,
    status: true,
  },
  { id: 3, img: bmw, title: "BMW M5", price: 300000, status: false },
];

export const sortByNameOptions = [
  "По наименованию (А-Я)",
  "По наименованию (Я-A)",
];

export const sortByPopularOptions = [
  "По популярности (возрастание)",
  "По популярности (убывание)",
];

export const sortByPriceOptions = [
  "По цене (сначала дешёвые)",
  "По цене (сначала дорогие)",
];

export const marks = [
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

export const statuses = ["В наличии", "Под заказ"];

export const years = ["2019", "2020", "2021", "2022", "2023"];

export const colors = [
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

export const innerColors = [
  "Бежевый",
  "Белый",
  "Коричневый",
  "Красный",
  "Серый",
  "Черно-белый",
  "Черный",
];

export const mats = [
  "Алькантара",
  "Искусственная кожа",
  "Кожа",
  "Кожа + вставки из Алькантары",
  "Комбинированный / Ткань",
  "Ткань",
];

export const engines = [
  "190 л.с.",
  "197 л.с. / 2.0 л",
  "2.0 л / 249 л.с. / Quattro",
  "2.9 л",
  "3.0 л / 340 л.с. / бензин",
];

export const korobkas = [
  "7-ступенчатая робот",
  "9-ступенчатая автоматическая коробка передач",
  "Автоматическая",
  "8-ступенчатая автоматическая",
];

export const adds = [
  "Carplay| Android, круиз-контроль,  камера 360°, фаркоп, адаптивный круиз-контроль Plus, активная помощь при парковке, электрорегулировка передних сидений, активная система удержания полосы движения, электрохромное зеркало",
];
