import React from "react";
import { StyledBurger } from "./Burger.style";

const Burger = ({ toggleMenu, openMenu }) => {
  return (
    <StyledBurger open={openMenu} onClick={toggleMenu}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default Burger;
