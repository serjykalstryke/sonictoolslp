import React, { useState } from "react";
import { Button, Nav } from "react-bootstrap";
import "./SideBar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="sidebar-button-wrapper">
        <Button
          onClick={() => setIsOpen(!isOpen)}
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
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <Nav defaultActiveKey="/home" className="flex-column">
          <Nav.Link href="/home">Active</Nav.Link>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav>
      </div>
    </>
  );
};

export default Sidebar;
