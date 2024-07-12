"use client";
import withAuth from "@hoc/withAuth";
import { BoardItem } from "./types/type";
import { dashboards } from "./constants/Dashboard";
import DashboardBox from "@/components/Board";

const HomePage: React.FC = () => {
  const boards: BoardItem[] = dashboards.map((board) => ({
    id: board.id,
    title: board.title,
    subTitle: board.subTitle,
    moreBtn: board.moreBtn,
    moreBtnLink: board.moreBtnLink,
    cls: board.cls || "block",
    children: <div>하이?</div>,
  }));

  return (
    <div style={{ height: "calc(100vh - 65px)", padding: "0 10px" }}>
      <h2 className="title">대시보드</h2>
      {boards.map((board) => (
        <DashboardBox
          id={board.id}
          key={`${board.id}`}
          title={board.title}
          subTitle={board.subTitle}
          moreBtn={board.moreBtn}
          moreBtnLink={board.moreBtnLink}
          cls={board.cls}
        >
          {board.children}
        </DashboardBox>
      ))}
    </div>
  );
};

export default withAuth(HomePage);
