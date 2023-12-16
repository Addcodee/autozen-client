"use client";

import "./Menu.scss";
import burger_menu from "../../shared/icons/burger-menu.svg";
import CircleButton from "@/shared/UI/CircleButton/CircleButton";
import Image from "next/image";
import close_icon from "../../shared/icons/close-icon.svg";
import { pages } from "./variables";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import SendMessage from "../SendMessage/SendMessage";
import { bodyOverflow } from "@/shared/helpers";

const Menu = () => {
  const [menu, setMenu] = useState<boolean>(false);
  const [popUp, setPopUp] = useState<boolean>(false);
  const menuRef: React.RefObject<HTMLDivElement> = useRef(null);

  const handleClick = () => {
    setMenu(true);
  };

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <>
      <CircleButton
        icon={burger_menu}
        width={24}
        height={24}
        handleClick={handleClick}
      />
      {menu && (
        <div ref={menuRef} className="menu">
          <div className="menu__header">
            <p>Меню</p>

            <button onClick={() => setMenu(false)}>
              <Image
                src={close_icon}
                alt="close Icon"
                width={30}
                height={30}
              />
            </button>
          </div>

          <ul className="menu__pages">
            {pages.map((page) => (
              <li>
                <Link key={page.id} href={page.path}>
                  {page.title}
                </Link>
              </li>
            ))}
            <li>
              <button
                onClick={() => {
                  setPopUp(true);
                  bodyOverflow("hidden");
                }}
              >
                Отправить заявку
              </button>
            </li>
          </ul>
          {popUp && <SendMessage closePopUp={setPopUp} />}
        </div>
      )}
    </>
  );
};

export default Menu;
