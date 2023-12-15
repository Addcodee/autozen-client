"use client";

import Image from "next/image";
import "./Navbar.scss";
import logo_mint from "../../shared/logo/autozen_logo_mint.svg";
import logo_black from "../../shared/logo/autozen_logo_black.svg";
import emblem_mint from "../../shared/logo/alt/autozen_emblem_mint.svg";
import emblem_black from "../../shared/logo/alt/autozen-emblem-black.svg";

import Link from "next/link";
import Menu from "@/features/Menu/Menu";
import SendMessage from "@/features/SendMessage/SendMessage";
import { useState } from "react";

const Navbar = () => {
  const [navStyle, setNavStyle] = useState<boolean>(false);
  const handleScroll = () => {
    if (window.scrollY <= 0) {
      setNavStyle(false);
    } else {
      setNavStyle(true);
    }
  };
  window.addEventListener("scroll", handleScroll);
  return (
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
          <SendMessage />
        </div>
        <Menu />
      </div>
    </nav>
  );
};

export default Navbar;
