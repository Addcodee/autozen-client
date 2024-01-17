"use client";

import "./Select.scss";
import chevron from "../../shared/icons/chevron-down-icon.svg";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface ISelectProps {
  options: string[];
  placeholder: string;
  isMultiple?: boolean;
  handleSelect: (options: string[] | string) => void;
  value: string[] | string;
  theme?: string;
}

const Select: React.FC<ISelectProps> = ({
  options,
  placeholder,
  isMultiple,
  handleSelect,
  value,
  theme,
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

        if (Array.isArray(value)) {
          const removeOption = value.filter(
            (item) => item !== option
          );

          return handleSelect(removeOption);
        }
      }

      return handleSelect([...value, option]);
    }

    handleSelect(option);
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

  const themeClass = () => {
    if (theme === "dark") {
      return "select-dark";
    }

    return "select-light";
  };

  return (
    <div ref={menuRef} className={themeClass()}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className={`${themeClass()}__label`}
      >
        <p>
          {value === "" || value.length === 0
            ? placeholder
            : Array.isArray(value)
            ? value.join(", ")
            : value}
        </p>
        <Image
          className={open ? `${themeClass()}__chevron_up` : ""}
          src={chevron}
          alt="Chevron Icon"
          width={18}
          height={18}
        />
      </button>

      {open && (
        <ul className={`${themeClass()}__options`}>
          {options.map((option) => (
            <li
              key={option}
              className={`${themeClass()}__options-item${
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
