"use client";

import "./Navbar.scss";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import logo_mint from "../../shared/logo/autozen_logo_mint.svg";
import logo_black from "../../shared/logo/autozen_logo_black.svg";
import emblem_mint from "../../shared/logo/alt/autozen_emblem_mint.svg";
import emblem_black from "../../shared/logo/alt/autozen-emblem-black.svg";
import Menu from "@/features/Menu/Menu";
import SendMessage from "@/features/SendMessage/SendMessage";
import CircleButton from "@/shared/UI/CircleButton/CircleButton";
import message_icon from "../../shared/icons/send-icon.svg";
import { bodyOverflow } from "@/shared/helpers";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [navStyle, setNavStyle] = useState<boolean>(false);
  const [popUp, setPopUp] = useState<boolean>(false);

  const pathname = usePathname();

  const openPopUp = () => {
    bodyOverflow("hidden");
    setPopUp(true);
  };

  const handleScroll = () => {
    if (window.scrollY <= 0) {
      setNavStyle(false);
    } else {
      setNavStyle(true);
    }
  };

  useEffect(() => {
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return pathname?.slice(0, 6) === "/admin" ? null : (
    <nav className={`navbar ${navStyle && "nav-scroll"}`}>
      {navStyle ? (
        <Image
          src={logo_black}
          alt="Autozen Logo"
          className="navbar__logo"
        />
      ) : (
        <Image
          src={logo_mint}
          alt="Autozen Logo"
          className="navbar__logo"
        />
      )}

      {navStyle ? (
        <Image
          src={emblem_black}
          alt="Autozen Logo"
          className="navbar__logo-sm"
        />
      ) : (
        <Image
          src={emblem_mint}
          alt="Autozen Logo"
          className="navbar__logo-sm"
        />
      )}

      <div className="navbar-actions">
        <ul className={`navbar__pages ${navStyle && "pages-scroll"}`}>
          <li>
            <Link href="/cars">Автомобили</Link>
          </li>
          <li>
            <Link href="/about-us">О нас</Link>
          </li>
        </ul>

        <div className="navbar__message">
          <CircleButton icon={message_icon} handleClick={openPopUp} />

          {popUp && <SendMessage closePopUp={setPopUp} />}
        </div>
        <Menu />
      </div>
    </nav>
  );
};

export default Navbar;
