import Image from "next/image";
import "./CircleButton.scss";

interface CircleButtonProps {
  icon: string;
  width?: number;
  height?: number;
  handleClick?: () => void;
}

const CircleButton: React.FC<CircleButtonProps> = ({
  icon,
  width,
  height,
  handleClick,
}: CircleButtonProps) => {
  return (
    <button onClick={handleClick} className="circleBtn">
      <Image src={icon} alt="Icon" width={width} height={height} />
    </button>
  );
};

export default CircleButton;
