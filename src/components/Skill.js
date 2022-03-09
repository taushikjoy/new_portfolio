import React from "react";
// import sasslogo from "../img/SASSSVG.svg";
import styled from "styled-components";
import { motion } from "framer-motion";
import { skillhover } from "../Styles/Pageanimation";

function Skill({ color, logo }) {
  // function changeBackgroundon(e) {
  //   e.target.style.background = color;
  //   // e.target.style.transform = "scale(4) translateZ(0)";
  // }
  // function changeBackgroundout(e) {
  //   e.target.style.background = "#333";
  // }

  const SkilloneStyle = styled(motion.div)`
    height: 75%;
    width: 45%;

    @media (max-width: 720px) {
      height: 75%;
      width: 80%;
    }

    .card {
      width: 100%;
      height: 100%;
      background-color: #0f141d;
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
      transform: scale(5) translateZ(0);
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
      /* transform: scale(1.4) translateZ(0); */

      box-shadow: 0 15px 24px rgba(0, 0, 0, 0.11),
        0 15px 24px rgba(255, 215, 97, 0.48);
    }

    .circle {
      width: 70%;
      height: 45%;
      border-radius: 50%;
      background: #fff;
      border: 2px solid ${color};
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      z-index: 1;
      transition: all 0.3s ease-out;

      @media (max-width: 720px) {
        width: 90%;
        height: 60%;
      }
    }

    .circle:after {
      content: "";
      width: 100%;
      height: 100%;
      display: block;
      position: absolute;
      background: #fff;
      border-radius: 50%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition: opacity 0.3s ease-out;
    }

    .circle img {
      z-index: 10000;
      margin-top: 0.5rem;
      transform: translateZ(0);
      position: absolute;
      height: 60%;
      width: 60%;
    }

    .overlay {
      height: 46%;
      width: 71%;
      position: absolute;
      border-radius: 50%;
      background-color: ${color};
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 0;
      transition: transform 1s ease-out;
      @media (max-width: 720px) {
        width: 90%;
        height: 60%;
      }
    }
  `;

  return (
    <SkilloneStyle
      variants={skillhover}
      // initial='hidden'
      //  animate='show'
    >
      <a
        className='card'
        // onMouseOver={changeBackgroundon}
        // onMouseOut={changeBackgroundout}
      >
        <div className='overlay'></div>
        <div className='circle'>
          <img src={logo} alt='' />
        </div>
      </a>
    </SkilloneStyle>
  );
}

export default Skill;
