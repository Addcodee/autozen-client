import "./CarActions.scss";

const CarActions = () => {
  return (
    <div className="car-actions">
      <div className="car-actions__price">
        <h3>Цена</h3>
        <p>от 32.453 €</p>
        <p>• В наличии</p>
      </div>
      <div className="car-actions__btns">
        <button>Заказать</button>
        <button>? Задать вопрос</button>
      </div>
    </div>
  );
};

export default CarActions;
