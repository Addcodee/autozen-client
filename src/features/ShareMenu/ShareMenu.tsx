"use client";

import "./ShareMenu.scss";
import cross from "../../shared/icons/close-icon.svg";
import Image from "next/image";
import { bodyOverflow } from "@/shared/helpers";
import whatsapp from "../../shared/icons/social-nets/whatsapp-svg.svg";
import telegram from "../../shared/icons/social-nets/telegram-svg.svg";
import facebook from "../../shared/icons/social-nets/facebook-svg.svg";
import vk from "../../shared/icons/social-nets/vk-svg.svg";
import gmail from "../../shared/icons/social-nets/gmail-svg.svg";

interface IShareMenu {
  closeMenu: (boolean: boolean) => void;
}

const ShareMenu: React.FC<IShareMenu> = ({
  closeMenu,
}: IShareMenu) => {
  const nets = [
    { id: 1, net: whatsapp },
    { id: 2, net: telegram },
    { id: 3, net: facebook },
    { id: 4, net: vk },
    { id: 5, net: gmail },
  ];
  const href = window.location.href;
  return (
    <div
      onClick={() => {
        bodyOverflow("auto");
        closeMenu(false);
      }}
      className="share-menu"
    >
      <div
        onClick={(e: React.MouseEvent<HTMLDivElement>) =>
          e.stopPropagation()
        }
        className="share-menu__container"
      >
        <div className="share-menu__header">
          <h4>Поделиться</h4>
          <button
            onClick={() => {
              bodyOverflow("auto");
              closeMenu(false);
            }}
          >
            <Image src={cross} alt="Close Icon" />
          </button>
        </div>

        <div className="share-menu__social-nets">
          {nets.map((net) => (
            <button key={net.id}>
              <Image src={net.net} alt="Net Icon" />
            </button>
          ))}
        </div>

        <div className="share-menu__copy-link">
          <p>{href}</p>
          <button>Копировать</button>
        </div>
      </div>
    </div>
  );
};

export default ShareMenu;
