import React, { ReactNode } from "react";
import Head from "next/head";
import "@styles/css/common.css";

type Props = {
  children?: ReactNode;
  title?: string;
};

const SigninLayout = ({ children }: Props) => {
  return (
    <div>
      <main
        style={{ maxWidth: 720, margin: "auto", height: "70vh" }}
        className="flex_justify_center"
      >
        {children}
      </main>
    </div>
  );
};

export default SigninLayout;
