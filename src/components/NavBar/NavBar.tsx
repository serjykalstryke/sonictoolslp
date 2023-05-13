import React, { useEffect, useState } from "react";
import { Navbar } from "react-bootstrap";
import Sidebar from "../SideBar/SideBar";
import "./NavBar.css";

const NavigationBar = () => {
  const [navbarBg, setNavbarBg] = useState("transparent");

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled) {
        setNavbarBg("dark");
      } else {
        setNavbarBg("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar bg={navbarBg} variant="dark" fixed="top">
      <div className="w-100 navbar-container">
        <Sidebar />
        <Navbar.Brand href="#home">My Website</Navbar.Brand>
      </div>
    </Navbar>
  );
};

export default NavigationBar;
