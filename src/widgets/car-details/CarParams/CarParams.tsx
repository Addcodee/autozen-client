import "./CarParams.scss";

const CarParams = () => {
  return (
    <div className="car-params">
      <h3>Характеристики</h3>
      <ul className="car-params__list">
        <li>
          <h4>Марка:</h4> <p>Kia</p>
        </li>
        <li>
          <h4>Модель:</h4> <p>Seltos K5</p>
        </li>
        <li>
          <h4>Год выпуска:</h4> <p>2022</p>
        </li>
        <li>
          <h4>Цвет кузова:</h4> <p>Серебристый</p>
        </li>
        <li>
          <h4>Цвет салона:</h4> <p>Бежевый</p>
        </li>
        <li>
          <h4>Материалы салона:</h4> <p>Кожа</p>
        </li>
        <li>
          <h4>Двигатель:</h4> <p>330 л.с./ Дизель</p>
        </li>
        <li>
          <h4>Коробка:</h4> <p>Автоматическая</p>
        </li>
        <li>
          <h4>Доп. опции:</h4>
          <p>Панорама, Apple CarPlay, 4-х зонный климат контроль</p>
        </li>
      </ul>
    </div>
  );
};

export default CarParams;
