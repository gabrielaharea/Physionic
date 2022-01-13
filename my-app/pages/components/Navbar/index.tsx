import Nav from "./styled";
import React from "react";
import { Link } from "react-router-dom";
import { FC } from "react";
import * as S from "./styled";
import { ButtonHome } from "../ButtonHome";
import Image from "next/image";

const Navbar = () => {
  return (
    <Nav className="nav_bar">
      <div className="container">
        <h2>Physions</h2>
        <div>
          <ul className="nav_links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/product">Product</a>
            </li>
            <li>
              <a href="/pricing">Pricing</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <ButtonHome />
      </div>
    </Nav>
  );
};

export default Navbar;
