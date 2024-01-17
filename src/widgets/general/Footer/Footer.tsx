"use client";

import "./Footer.scss";
import logo from "../../../shared/logo/autozen_logo_mint.svg";
import emblem from "../../../shared/logo/alt/autozen_emblem_mint.svg";
import Image from "next/image";
import Link from "next/link";
import { contacts, links, nets } from "./variables";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathName = usePathname();
  return pathName?.slice(0, 6) === "/admin" ? null : (
    <footer className="footer">
      <div className="footer__header">
        <h3>Остались вопросы?</h3>
        <p>
          Отправьте запрос на консультацию и с вами свяжутся в
          ближайшее время!
        </p>
        <button>Отправить заявку</button>
      </div>
      <div className="footer__line"></div>
      <div className="footer__container">
        <div className="footer__logo">
          <button className="footer__logo_big">
            <Image src={logo} alt="Logo" />
          </button>
          <button className="footer__logo_small">
            <Image src={emblem} alt="Logo" width={50} />
          </button>
          <p>&copy; 2023 Autozen All rights Recerved.</p>
        </div>
        <ul className="footer__links">
          {links.map((link) => (
            <li key={link.id}>
              <Link href={link.path}>{link.link}</Link>
            </li>
          ))}
        </ul>
        <div className="footer__contacts">
          <h5>Контакты</h5>
          {contacts.map((contact) => (
            <div key={contact.id} className="footer__contacts-item">
              <Image
                src={contact.icon}
                alt={contact.alt}
                width={24}
                height={24}
              />
              <p>{contact.contact}</p>
            </div>
          ))}
        </div>
        <div className="footer__nets">
          <h5>Мы в соц.сетях</h5>
          <ul>
            {nets.map((net) => (
              <Image
                src={net.icon}
                alt={net.alt}
                width={24}
                height={24}
                key={net.id}
              />
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
