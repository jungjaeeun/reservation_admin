import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { MenuItem } from "@/app/types/type";
import "@styles/css/nav.css";
import Button from "./button/Button";

interface NavProps {
  adminName: string;
  adminImage: string;
  menus: MenuItem[];
}

const Nav: React.FC<NavProps> = ({ adminName, adminImage, menus }) => {
  return (
    <nav className="navigation">
      <div className="profile">
        <img src={adminImage} className="profileImage" />
        <span className="profileName">{adminName}</span>
      </div>
      <div style={{ width: "calc(100% - 30px)", marginBottom: 10 }}>
        <Button block>로그아웃</Button>
      </div>
      <ul className="menu">
        {menus.map((menu) => (
          <li key={menu.id} className="menuItem">
            <FontAwesomeIcon
              icon={menu.iconClass as unknown as IconDefinition}
              className="menuIcon"
              style={{ width: 20, height: 20 }}
            />
            <a href={menu.link}>{menu.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
