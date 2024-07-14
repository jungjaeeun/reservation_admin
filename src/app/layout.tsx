"use client";

import React from "react";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { menus } from "./constants/Menu";
import { AuthProvider, useAuth } from "@hoc/AuthContext";

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isLoggedIn, isLoading } = useAuth();
  const [isNavCollapsed, setIsNavCollapsed] = React.useState<boolean>(false);

  const toggleNavCollapse = () => {
    setIsNavCollapsed((prevCollapsed) => !prevCollapsed);
  };

  if (isLoading) {
    return null;
  }

  return (
    <>
      {isLoggedIn ? (
        <>
          <Nav
            menus={menus}
            isCollapsed={isNavCollapsed}
            onCollapseToggle={toggleNavCollapse}
          />
          <div
            style={{
              paddingLeft: `${isNavCollapsed ? "80px" : "250px"}`,
            }}
          >
            <h2>대시보드</h2>
            {children}
          </div>
          <Footer />
        </>
      ) : (
        <div>{children}</div>
      )}
    </>
  );
};

export default function App({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <html lang="en">
        <body style={{ margin: 0 }}>
          <RootLayout>{children}</RootLayout>
        </body>
      </html>
    </AuthProvider>
  );
}
