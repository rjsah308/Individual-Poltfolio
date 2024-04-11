import React from "react";
import { Roboto } from "next/font/google";
import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer";
import "./globals.css";
import "./layout.css";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
const links = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'About',
    url: '/about',
  },
  {
    title: 'Projects',
    url: '/projects',
  },
  {
    title: 'Uses',
    url: '/uses',
  },
];

export default function RootLayout({ children }) {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Navbar
          options={[
            { path: "/", label: "Home" },
            { path: "/about", label: "About" },
            { path: "/projects", label: "Projects" },
            {path:"/Gunmo Kim Resume.pdf", label: "Resume"}
          ]}
          style={{ margin: "0 auto" }}
        />
      </div>
      <main>{children}</main>
      <div className="footer">
        <Footer links={links} content= "footerContent"/>
      </div>
    </>
  );
}
