import React, { useState, useEffect, useRef } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CartTab.css";

interface DropdownProps {
  items: any[]; // Replace `any` with the type of your cart items
}

const CartTab: React.FC<DropdownProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        isOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(target)
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
      <div className="dropdown-button-wrapper">
        <Button
          onClick={handleButtonClick}
          className="dropdown-button"
          style={{
            backgroundColor: "orange",
            borderColor: "orange",
            color: "white",
          }}
        >
          Cart ({items.length})
        </Button>
      </div>
      <div className={`carttab ${isOpen ? "open" : ""}`} ref={dropdownRef}>
        <nav>
          <ul className="nav flex-column">
            {items.map((item) => (
              <li className="nav-item" key={item.id}>
                <div className="nav-link">
                  <div>{item.name}</div>
                  <div>Price: ${item.price}</div>
                  <div>Quantity: {item.quantity}</div>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-btn">
            <Link to="/cart">
              <Button id="cart-btn">Go to Cart</Button>
            </Link>
            <Link to="/checkout">
              <Button id="cart-btn">Checkout</Button>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default CartTab;
