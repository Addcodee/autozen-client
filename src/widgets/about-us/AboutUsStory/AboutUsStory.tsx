import Image from "next/image";
import "./AboutUsStory.scss";
import { parts } from "./variables";

const AboutUsStory = () => {
  return (
    <div className="about-us-story">
      <h3>
        Доставка 17 Контейнеров Новых KIA:
        <p>Наша История Успеха в Логистике</p>
      </h3>

      {parts.map((part, index) => (
        <div
          className={`about-us-story__item_${
            (index + 1) % 2 ? "odd" : "even"
          }`}
          key={part.id}
        >
          <Image
            src={part.img}
            alt="Story Image"
            placeholder="blur"
          />
          <div className="about-us-story__text">
            <h4>{part.title}</h4>
            <p>{part.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutUsStory;
