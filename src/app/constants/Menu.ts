import {
  faCalendar,
  faCircleInfo,
  faUser,
  faDashboard,
} from "@fortawesome/free-solid-svg-icons";
import { MenuItem } from "../types/type";

export const menus: MenuItem[] = [
  {
    id: 0,
    title: "대시보드",
    iconClass: faDashboard,
    link: "/",
  },
  {
    id: 1,
    title: "회원관리",
    iconClass: faUser,
    link: "/members",
  },
  {
    id: 2,
    title: "예약관리",
    iconClass: faCalendar,
    link: "/reservations",
  },
  {
    id: 3,
    title: "고객센터",
    iconClass: faCircleInfo,
    subMenus: [
      {
        id: 4,
        title: "1:1 문의",
        link: "/center/inquiry",
      },
      {
        id: 5,
        title: "FAQ",
        link: "/center/faq",
      },
      {
        id: 6,
        title: "공지사항",
        link: "/center/notice",
      },
    ],
  },
];
