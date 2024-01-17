import Image, { StaticImageData } from "next/image";
import "./PageHeader.scss";

interface IPageHeader {
  background: StaticImageData;
  title: string;
  description?: string;
  theme?: string;
}

const PageHeader: React.FC<IPageHeader> = ({
  background,
  title,
  description,
  theme,
}: IPageHeader) => {
  return (
    <div className="page-header">
      <Image src={background} alt="Header Image" placeholder="blur" />
      <div
        className={`page-header__text${
          theme === "dark" ? "_dark" : ""
        }`}
      >
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default PageHeader;
