"use client";

import Link from "next/link";
import "./Dashboard.scss";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [activePage, setActivePage] = useState<string>("");

  const pages = [
    { id: 1, page: "Главная", path: "/" },
    { id: 2, page: "Автомобили", path: "/admin/autos" },
    { id: 3, page: "Заявки", path: "/admin/requests" },
    { id: 4, page: "Заказы", path: "/admin/orders" },
  ];

  useEffect(() => {
    setActivePage(window.location.pathname);
  }, []);

  return (
    <div className="dashboard">
      <ul className="dashboard__list">
        {pages.map((page) => (
          <li
            onClick={() => setActivePage(page.path)}
            key={page.id}
            className={`dashboard__item${
              activePage === page.path
                ? "_active"
                : activePage === `${page.path}/create`
                ? "_active"
                : ""
            }`}
          >
            <Link href={page.path}>{page.page}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
