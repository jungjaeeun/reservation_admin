import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  title?: string;
};

const NoticeLayout = ({ children, title = "공지사항" }: Props) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

export default NoticeLayout;
