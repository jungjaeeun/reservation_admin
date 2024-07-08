import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  title?: string;
};

const MembersLayout = ({ children, title = "회원관리" }: Props) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

export default MembersLayout;
