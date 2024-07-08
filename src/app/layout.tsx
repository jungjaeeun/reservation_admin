import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { menus } from "./constants/Menu";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isLoggedIn = true;
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        {isLoggedIn && (
          <Nav
            adminName="정재은"
            adminImage="https://i.pinimg.com/736x/e0/29/d4/e029d410bc752cab68e3031fbec67f6d.jpg"
            menus={menus}
          />
        )}
        <div>{children}</div>
        {isLoggedIn && <Footer />}
      </body>
    </html>
  );
}
