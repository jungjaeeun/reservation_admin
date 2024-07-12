"use client";

import React, { useState } from "react";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { menus } from "./constants/Menu";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isLoggedIn = true;
  const [isNavCollapsed, setIsNavCollapsed] = useState<boolean>(false);
  const toggleNavCollapse = () => {
    setIsNavCollapsed((prevCollapsed) => !prevCollapsed);
  };

  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        {isLoggedIn && (
          <Nav
            menus={menus}
            isCollapsed={isNavCollapsed}
            onCollapseToggle={toggleNavCollapse}
          />
        )}
        <div style={{ paddingLeft: `${isNavCollapsed ? "80px" : "250px"}` }}>
          <h2>대시보드</h2>
          {children}
        </div>
        {isLoggedIn && <Footer />}
      </body>
    </html>
  );
}
