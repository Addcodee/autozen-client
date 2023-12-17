"use client";

import Link from "next/link";
import "./Dashboard.scss";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [activePage, setActivePage] = useState<string>("");

  const pages = [
    { id: 1, page: "Автомобили", path: "/admin/autos" },
    { id: 2, page: "Заявки", path: "/admin/requests" },
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
