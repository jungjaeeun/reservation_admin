import React, { ReactNode } from "react";
import Head from "next/head";
import "@styles/css/common.css";

type Props = {
  children?: ReactNode;
  title?: string;
};

const SigninLayout = ({ children, title = "로그인" }: Props) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Login" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        style={{ maxWidth: 720, margin: "auto" }}
        className="flex_justify_center"
      >
        {children}
      </main>
    </div>
  );
};

export default SigninLayout;
