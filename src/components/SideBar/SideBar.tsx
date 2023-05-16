import React, { useEffect, useRef } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SideBar.css";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = () => {
    setIsOpen(!isOpen); // Toggle the sidebar
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        isOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(target) &&
        !(event.target instanceof HTMLButtonElement)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    // Clean up the event listener
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, setIsOpen]);

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
