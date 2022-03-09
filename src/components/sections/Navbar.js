import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
//import { Routes, Route, Link } from "react-router-dom";

function Navbar() {
  const [showNav, setShowNav] = useState(false);

  return (
    <StyledNav>
      <div className='mainbar'>
        <div className='mobile-menu-icon' onClick={() => setShowNav(!showNav)}>
          <MenuIcon className='menuicon' />
        </div>
        <ul className={!showNav ? "hideitems" : "pc-menu-icon"}>
          <li className='closebtn' onClick={() => setShowNav(!showNav)}>
            <CloseIcon />
          </li>
          <a>About Me</a>
          <a href='#skills'>Skills</a>
          <a href='#projects'>Projects</a>
          <a href='#contact'>Contact Me</a>
        </ul>
      </div>
    </StyledNav>
  );
}

const StyledNav = styled.div`
  .mainbar {
    display: block;
    z-index: 100;
    width: 100%;
    height: 70px;
    position: fixed;
    top: 0;
    left: 0;
    padding: 2rem 0rem;
    color: white;
    background-color: #181c29;
  }

  /* font-family: "Josefin Sans", sans-serif; */
  ul {
    display: flex;
    margin: auto;
    justify-content: center;
    gap: 2rem;

    a {
      text-decoration: none;
      color: white;
    }
  }

  .mobile-menu-icon {
    position: absolute;
    right: 1rem;
    top: 1.2rem;
    width: 4rem;
    height: auto;
    cursor: pointer;
    display: none;
    .menuicon {
      width: 5rem;
      color: white;
    }
  }
  .closebtn {
    display: none;
  }

  @media (max-width: 720px) {
    .mobile-menu-icon {
      display: block;
    }
    .pc-menu-icon {
      position: absolute;
      top: 1rem;
      right: 1rem;
      height: 14rem;
      width: 9rem;
      background-color: #233345;
      opacity: 1;
      display: flex;
      flex-direction: column;
      font-size: 1.1rem;
      padding: 1rem 2rem;
      gap: 0.7rem;
    }
    .closebtn {
      position: absolute;
      top: 1rem;
      right: 1rem;
      display: block;
    }
    .hideitems {
      display: none;
    }
  }
`;

export default Navbar;
