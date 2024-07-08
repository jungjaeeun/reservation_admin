import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  title?: string;
};

const ReservationLayout = ({ children, title = "예약관리" }: Props) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

export default ReservationLayout;
