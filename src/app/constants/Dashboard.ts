import { BoardItem } from "../types/type";

export const dashboards: BoardItem[] = [
  {
    id: 0,
    title: "회원관리",
    subTitle: "가입유저",
    moreBtn: true,
    moreBtnLink: "/members",
    cls: "block",
  },
  {
    id: 1,
    title: "예약관리",
    subTitle: "신규예약",
    moreBtn: true,
    moreBtnLink: "/reservations",
    cls: "half",
    m_r: 10,
  },
  {
    id: 2,
    title: "예약관리",
    subTitle: "취소된예약",
    moreBtn: true,
    moreBtnLink: "/reservations",
    cls: "half",
  },
  {
    id: 3,
    title: "고객센터",
    subTitle: "신규 1:1문의",
    moreBtn: true,
    moreBtnLink: "/center/inquiry",
    cls: "block",
  },
];
