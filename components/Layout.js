import React, { useState } from "react";
import { Menu, Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import Head from "next/head";
import {Link, Router} from '../routes'


const Layout = ({ children }) => {
  const [activeItem, setActiveItem] = useState("home");

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  };

  return (
    <Container>
      <Menu style={{ marginTop: "10px" }}>
      <Link route="/">
        <a className="item">CrowdCoins</a>
      </Link>

        <Menu.Menu position="right">
          <Link route="/">
            <a className="item">Campaigns</a>
          </Link>
          <Link route="/campaigns/new">
            <a className="item">+</a>
          </Link>
        </Menu.Menu>
      </Menu>
      {children}
    </Container>
  );
};

export default Layout;
