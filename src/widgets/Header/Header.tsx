import Image from "next/image";
import "./Header.scss";
import background from "./assets/background.jpg";

const Header = () => {
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
        <button>Оставить заявку</button>
      </div>
    </header>
  );
};

export default Header;
