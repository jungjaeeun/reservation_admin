import React from "react";
import { BoardItem } from "@/app/types/type";
import Link from "next/link";
import "@styles/css/board.css";
import "@styles/css/common.css";

interface DashboardBoxProps extends BoardItem {}

const DashboardBox: React.FC<DashboardBoxProps> = ({
  title,
  subTitle,
  moreBtn = false,
  moreBtnLink = "",
  cls = "block",
  children,
}) => {
  return (
    <div className={`dashboard-box ${cls}`}>
      <h4 className="sub-title m_0">{title}</h4>
      <div className="title-area flex_justify_space_between">
        <h5>{subTitle}</h5>
        {moreBtn && <Link href={moreBtnLink}>더보기</Link>}
      </div>
      {children}
    </div>
  );
};

export default DashboardBox;
