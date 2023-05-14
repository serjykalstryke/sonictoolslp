import React from "react";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: "#f8f9fa",
        padding: "10px",
        textAlign: "center",
      }}
    >
      <p>© {year} Your Company Name</p>
    </footer>
  );
};

export default Footer;
