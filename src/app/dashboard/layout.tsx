import React, { ReactNode } from "react";
import Head from "next/head";
import "@styles/css/common.css";

type Props = {
  children?: ReactNode;
  title?: string;
};

const SigninLayout = ({ children, title = "대시보드" }: Props) => {
  return <div>{children}</div>;
};

export default SigninLayout;
