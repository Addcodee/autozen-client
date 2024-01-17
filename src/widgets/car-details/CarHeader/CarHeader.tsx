"use client";

import "./CarHeader.scss";
import save from "../../../shared/icons/save-icon.svg";
import share from "../../../shared/icons/share-icon.svg";
import Image from "next/image";
import { useState } from "react";
import ShareMenu from "@/features/ShareMenu/ShareMenu";
import { bodyOverflow } from "@/shared/helpers";

const CarHeader = () => {
  const [shareMenu, setShareMenu] = useState<boolean>(false);
  return (
    <div className="car-header">
      <h2>Kia Seltos K5</h2>
      <div className="car-header__actions">
        <button
          onClick={() => {
            bodyOverflow("hidden");
            setShareMenu(true);
          }}
        >
          <Image
            src={share}
            alt="Share Icon"
            width={32}
            height={32}
          />
          Поделиться
        </button>
        <button>
          <Image src={save} alt="Save Icon" width={32} height={32} />
          Сохранить
        </button>
      </div>
      {shareMenu && <ShareMenu closeMenu={setShareMenu} />}
    </div>
  );
};

export default CarHeader;
