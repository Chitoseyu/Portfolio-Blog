
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "@/styles/globals.css";
import NavLink from "@/components/nav-link";

const navLinks = [
  {name:"🏠 首頁",href:"/"},
  {name:"📁 關於我",href:"/aboutbulit"},
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
      </body>
    </html>
  );
}
