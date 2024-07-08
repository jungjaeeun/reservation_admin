import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  title?: string;
};

const FaqLayout = ({ children, title = "FAQ" }: Props) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

export default FaqLayout;
