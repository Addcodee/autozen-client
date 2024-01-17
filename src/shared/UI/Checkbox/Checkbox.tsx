"use client";

import "./Checkbox.scss";
import check_icon from "../../icons/check-white-icon.svg";
import Image from "next/image";
import { useState } from "react";

interface ICheckboxProps {
  handleClick?: () => void;
}

const Checkbox: React.FC<ICheckboxProps> = ({
  handleClick,
}: ICheckboxProps) => {
  const [check, setCheck] = useState<boolean>(false);
  return (
    <button
      onClick={() => {
        setCheck((prev) => !prev);
        handleClick && handleClick();
      }}
      className="checkbox"
    >
      {check && <Image src={check_icon} alt="Check Icon" />}
    </button>
  );
};

export default Checkbox;
