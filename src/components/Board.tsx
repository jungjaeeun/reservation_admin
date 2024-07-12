import React from "react";
import { BoardItem } from "@/app/types/type";
import Link from "next/link";
import "@styles/css/board.css";
import "@styles/css/common.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

interface DashboardBoxProps extends BoardItem {}

const DashboardBox: React.FC<DashboardBoxProps> = ({
  title,
  subTitle,
  moreBtn = false,
  moreBtnLink = "",
  cls = "block",
  children,
  m_r = 0,
}) => {
  return (
    <div className={`dashboard-box ${cls}`} style={{ marginRight: m_r }}>
      <h4 className="sub-title m_0">{title}</h4>
      <div className="title-area flex_justify_space_between">
        <h5>{subTitle}</h5>
        {moreBtn && (
          <Link href={moreBtnLink}>
            <FontAwesomeIcon icon={faAnglesRight}></FontAwesomeIcon>
          </Link>
        )}
      </div>
      {children}
    </div>
  );
};

export default DashboardBox;
