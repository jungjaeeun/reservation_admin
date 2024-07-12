"use client";

import React, { useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { NavProps } from "@/app/types/type";
import Button from "./button/Button";
import "@styles/css/nav.css";

import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Nav: React.FC<NavProps> = ({ adminName, adminImage, menus }) => {
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const toggleSubMenu = useCallback((id: number) => {
    setOpenMenuId((prevOpenMenuId) => (prevOpenMenuId === id ? null : id));
  }, []);

  const toggleCollapse = useCallback(() => {
    setIsCollapsed((prevIsCollapsed) => !prevIsCollapsed);
  }, []);

  return (
    <nav className={`navigation ${isCollapsed ? "collapsed" : ""}`}>
      <div className="toggleButton" onClick={toggleCollapse}>
        <FontAwesomeIcon icon={isCollapsed ? faChevronRight : faChevronLeft} />
      </div>
      <div className="profile">
        <img
          src={adminImage}
          className={`profileImage ${isCollapsed ? "small_profile" : ""}`}
          alt="Profile"
        />
        <span className="profileName">{adminName}</span>
      </div>
      {!isCollapsed && (
        <div style={{ width: "calc(100% - 30px)", marginBottom: 10 }}>
          <Button block>로그아웃</Button>
        </div>
      )}
      <ul className="menu">
        {menus.map((menu) => (
          <li
            key={menu.id}
            className={`menuItem ${openMenuId === menu.id ? "open" : ""}`}
            onClick={() => menu.subMenus && toggleSubMenu(menu.id)}
          >
            <FontAwesomeIcon
              icon={menu.iconClass as unknown as IconDefinition}
              className="menuIcon"
              style={{ width: 20, height: 20 }}
            />
            {!isCollapsed &&
              (menu.link ? (
                <a href={menu.link}>{menu.title}</a>
              ) : (
                <span>{menu.title}</span>
              ))}
            {menu.subMenus && (
              <ul className="subMenu">
                {menu.subMenus.map((subMenu) => (
                  <li key={subMenu.id} className="subMenuItem">
                    <a href={subMenu.link}>{subMenu.title}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default React.memo(Nav);
