
import type { Metadata } from "next";
import "@/styles/globals.css";
import NavLink from "@/components/nav-link";

const navLinks = [
  {name:"🏠 首頁",href:"/"},
  {name:"📁 關於我",href:"/about"},
  {name:"🏆 專案經歷",href:"/projects"},
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
        <footer className="mt-2 flex flex-wrap justify-center gap-6 text-gray-600 dark:text-gray-400">
            Copyright ©  2025 🐤 Ren
        </footer>
      </body>

    </html>
  );
}
