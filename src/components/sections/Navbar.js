import React from "react";
import styled from "styled-components";
//import { Routes, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <StyledNav>
      <ul>
        <li>About Me</li>
        <li>About Me</li>
        <li>About Me</li>
        <li>About Me</li>
      </ul>
    </StyledNav>
  );
}

const StyledNav = styled.div`
  z-index: 100;
  width: 100%;
  height: 70px;
  position: fixed;
  top: 0;
  left: 0;
  padding: 2rem 0rem;
  color: white;
  background-color: #222222;
  font-family: "Josefin Sans", sans-serif;
  ul {
    display: flex;
    margin: auto;
    justify-content: center;
    gap: 2rem;
  }
`;

export default Navbar;
