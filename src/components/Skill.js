import React from "react";
// import sasslogo from "../img/SASSSVG.svg";
import styled from "styled-components";
import { motion } from "framer-motion";

const skillhover = {
  hidden: {
    y: 0,
    x: -5,
  },
  show: {
    y: 10,
    x: 0,
    transition: {
      yoyo: Infinity,
    },
  },
};

function Skill({ color, logo }) {
  // function changeBackgroundon(e) {
  //   e.target.style.background = color;
  //   // e.target.style.transform = "scale(4) translateZ(0)";
  // }
  // function changeBackgroundout(e) {
  //   e.target.style.background = "#333";
  // }
  const SkilloneStyle = styled(motion.div)`
    .card {
      width: 8rem;
      height: 12rem;
      background-color: #111;
      border-radius: 10px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      box-shadow: 0 14px 26px rgba(0, 0, 0, 0.04);
      transition: all 0.3s ease-out;
      text-decoration: none;

      &:hover {
        transform: translateY(-5px) scale(1.005) translateZ(0);
        box-shadow: 0 24px 36px ${color}, 0 24px 46px rgba(255, 215, 97, 0.48);
      }
    }

    /* .card:hover {
      transform: translateY(-5px) scale(1.005) translateZ(0);
      box-shadow: 0 24px 36px rgba(0, 0, 0, 0.11),
        0 24px 46px rgba(255, 215, 97, 0.48);
    } */

    .card:hover .overlay {
      transform: scale(4) translateZ(0);
      background-color: ${color};
    }

    .card:hover .circle {
      //that need work //
      /* border-color: ; */
      background: #ffd861;
    }

    .card:hover .circle:after {
      background: #f7e3cb;
    }

    .card:active {
      transform: scale(2) translateZ(0);
      box-shadow: 0 15px 24px rgba(0, 0, 0, 0.11),
        0 15px 24px rgba(255, 215, 97, 0.48);
    }

    .circle {
      width: 6rem;
      height: 6rem;
      border-radius: 50%;
      background: #fff;
      border: 2px solid ${color};
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      z-index: 1;
      transition: all 0.3s ease-out;
    }

    .circle:after {
      content: "";
      width: 6.4rem;
      height: 6.4rem;
      display: block;
      position: absolute;
      background: #fff;
      border-radius: 50%;
      top: -1px;
      left: -3px;
      transition: opacity 0.3s ease-out;
    }

    .circle img {
      z-index: 10000;
      margin-top: 0.5rem;
      transform: translateZ(0);
      height: 3.9rem;
    }

    .overlay {
      width: 6.8rem;
      height: 6.8rem;
      position: absolute;
      border-radius: 50%;
      background-color: ${color};
      top: 46px;
      left: 12px;
      z-index: 0;
      transition: transform 1s ease-out;
    }
  `;
  return (
    <SkilloneStyle
      variants={skillhover}
      // initial='hidden'
      //  animate='show'
    >
      <a
        href='#'
        class='card education'
        // onMouseOver={changeBackgroundon}
        // onMouseOut={changeBackgroundout}
      >
        <div class='overlay'></div>
        <div class='circle'>
          <img src={logo} alt='' />
        </div>
      </a>
    </SkilloneStyle>
  );
}
export default Skill;

/* 
  .overlay {
      width: 118px;
      position: absolute;
      height: 118px;
      border-radius: 50%;
      background: #ffd861;
      top: 34px;
      left: 25px;
      z-index: 0;
      transition: transform 1s ease-out;
    } 
   width: 11rem;
  border-radius: 11px;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;
  .insidediv {
    padding: 1rem 0rem;
    display: flex;

    .logo {
      flex: 1;
      img {
        height: 4rem;
      }
    }
  }

  .desc {
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    h2 {
      color: #2e2e2e;
      font-size: 2rem;
    }
  } 
  */
