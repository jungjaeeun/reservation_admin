import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { ReactNode } from "react";

export interface MenuItem {
  id: number;
  title: string;
  iconClass?: string | IconDefinition | unknown;
  link?: string;
  subMenus?: MenuItem[];
}

export interface NavProps {
  menus: MenuItem[];
  isCollapsed: boolean;
  onCollapseToggle: () => void;
}

export interface BoardItem {
  id: number;
  title: string;
  subTitle?: string;
  children?: ReactNode;
  moreBtn?: boolean;
  moreBtnLink?: string;
  cls?: "block" | "half"; // 한줄을 가져갈 것인지, 한줄에 두개씩 나눌것인지,
  m_r?: number; // margin right
}
