import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { MenuItem } from "./types/type";
import {
  faUser,
  faCalendar,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isLoggedIn = true;
  const menus: MenuItem[] = [
    {
      id: 0,
      title: "회원관리",
      iconClass: faUser,
      link: "/members",
    },
    {
      id: 1,
      title: "예약관리",
      iconClass: faCalendar,
      link: "/reservations",
    },
    {
      id: 2,
      title: "고객센터",
      iconClass: faCircleInfo,
      link: "/center",
    },
  ];

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
