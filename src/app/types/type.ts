import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface MenuItem {
  id: number;
  title: string;
  iconClass?: string | IconDefinition | unknown;
  link?: string;
  subMenus?: MenuItem[];
}

export interface NavProps {
  adminName: string;
  adminImage: string;
  menus: MenuItem[];
}
