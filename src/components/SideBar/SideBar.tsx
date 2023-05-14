import React, { useState, useEffect, useRef } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SideBar.css";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        isOpen == true &&
        sidebarRef.current &&
        !sidebarRef.current.contains(target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    // Clean up the event listener
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <>
      <div className="sidebar-button-wrapper">
        <Button
          onClick={handleButtonClick}
          className="sidebar-button"
          style={{
            backgroundColor: "orange",
            borderColor: "orange",
            color: "white",
          }}
        >
          &#9776;
        </Button>
      </div>
      <div className={`sidebar ${isOpen ? "open" : ""}`} ref={sidebarRef}>
        <nav>
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/link-2" className="nav-link">
                Link
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
