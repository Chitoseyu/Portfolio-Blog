
import type { Metadata } from "next";
import "@/styles/globals.css";
import NavLink from "@/components/nav-link";
import GA4Tracker from "@/components/GA4Tracker";

const navLinks = [
  {name:"🏠 首頁",href:"/"},
  {name:"📁 關於",href:"/about"},
  {name:"📝 專案",href:"/projects"},
  {name:"💼 經歷",href:"/experience"},
];

export const metadata: Metadata = {
  title: "Ren-Portfolio",
  description: "Portfolio by Ren",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <head>
        <GA4Tracker />
      </head>
      <body>
        <nav>
          {navLinks.map((link)=>{
            return (
              <NavLink className="nav-link" href={link.href} key={link.name} exact>
                  {link.name}
              </NavLink>
            )
          })}
        </nav>
        {children}
        <footer className="footer">
            Copyright ©  2025 🐤 Ren
        </footer>
      </body>

    </html>
  );
}
