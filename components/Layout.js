import React, { useState } from "react";
import { Menu, Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import Head from "next/head";

const Layout = ({ children }) => {
  const [activeItem, setActiveItem] = useState("home");

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  };

  return (
    <Container>
      <Menu style={{ marginTop: "10px" }}>
        <Menu.Item
          name="browse"
          active={activeItem === "home"}
          onClick={handleItemClick}
        >
          CrowdCoins
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item
            name="signup"
            active={activeItem === "campaings"}
            onClick={handleItemClick}
          >
            Campaings
          </Menu.Item>

          <Menu.Item
            name="help"
            active={activeItem === "add"}
            onClick={handleItemClick}
          >
            +
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      {children}
    </Container>
  );
};

export default Layout;
