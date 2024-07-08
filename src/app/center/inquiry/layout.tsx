import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  title?: string;
};

const InquiryLayout = ({ children, title = "1:1문의" }: Props) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

export default InquiryLayout;
