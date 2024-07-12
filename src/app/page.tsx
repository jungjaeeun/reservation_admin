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
    m_r: board.m_r,
    cls: board.cls || "block",
    children: <></>,
  }));

  boards[0].children = <div>회원관리 내용</div>;
  boards[1].children = <div>신규예약 내용</div>;
  boards[2].children = <div>취소된예약 내용</div>;
  boards[3].children = <div>1:1문의 내용</div>;

  return (
    <div
      style={{
        height: "calc(100vh - 134px)",
        padding: "0 10px",
        flexWrap: "wrap",
        display: "flex",
      }}
    >
      {boards.map((board) => (
        <DashboardBox
          id={board.id}
          key={`${board.id}`}
          title={board.title}
          subTitle={board.subTitle}
          moreBtn={board.moreBtn}
          moreBtnLink={board.moreBtnLink}
          cls={board.cls}
          m_r={board.m_r}
        >
          {board.children}
        </DashboardBox>
      ))}
    </div>
  );
};

export default withAuth(HomePage);
