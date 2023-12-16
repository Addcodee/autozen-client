"use client";

import "./Select.scss";
import chevron_down from "../../shared/icons/chevron-down-icon.svg";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface ISelectProps {
  options: string[];
  placeholder: string;
  isMultiple?: boolean;
  handleSelect: (options: string[]) => void;
  value: string[];
}

const Select: React.FC<ISelectProps> = ({
  options,
  placeholder,
  isMultiple,
  handleSelect,
  value,
}: ISelectProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const menuRef: React.RefObject<HTMLDivElement> = useRef(null);

  const setOptions = (option: string) => {
    if (isMultiple) {
      if (value[0] === placeholder) {
        handleSelect([option]);
        return;
      }

      if (value.includes(option)) {
        if (value.length === 1) {
          handleSelect([placeholder]);
          return;
        }

        const removeOption = value.filter((item) => item !== option);

        return handleSelect(removeOption);
      }

      return handleSelect([...value, option]);
    }

    handleSelect([option]);
    setOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div ref={menuRef} className="select">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="select__label"
      >
        <p>{value[0] === "" ? placeholder : value.join(", ")}</p>
        <Image
          src={chevron_down}
          alt="Down Chevron"
          width={18}
          height={18}
        />
      </button>

      {open && (
        <ul className="select__options">
          {options.map((option) => (
            <li
              key={option}
              className={`select__options-item${
                value.includes(option) ? "_active" : ""
              }`}
            >
              <button onClick={() => setOptions(option)}>
                {option}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
