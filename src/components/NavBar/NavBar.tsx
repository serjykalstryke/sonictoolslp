import React, { useEffect, useState } from "react";
import { Navbar } from "react-bootstrap";
import Sidebar from "../SideBar/SideBar";
import CartTab from "../CartTab/CartTab";
import "./NavBar.css";

const NavigationBar = () => {
  const cartItems = [
    { id: 1, name: "Product 1", price: 10.99, quantity: 2 },
    { id: 2, name: "Product 2", price: 15.99, quantity: 1 },
    // Add more items as needed
  ];

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate transparency based on scroll position
  const transparency = Math.min(scrollPosition / 500, 1);
  const navbarStyle = {
    backgroundColor: "#767980",
  };

  return (
    <Navbar style={navbarStyle} variant="dark" fixed="top">
      <div className="w-100 navbar-container">
        <div className="left-container">
          <Sidebar />
        </div>
        <div className="right-container">
          <div className="cart-button">
            <CartTab items={cartItems} />
          </div>
          <Navbar.Brand href="#home">Logo</Navbar.Brand>
        </div>
      </div>
    </Navbar>
  );
};

export default NavigationBar;
