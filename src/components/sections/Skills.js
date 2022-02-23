import React from "react";
import styled from "styled-components";
import Skill from "../Skill";

import { fade } from "../../Styles/Pageanimation";
import { motion } from "framer-motion";
import sasslogo from "../../img/SASSSVG.svg";
import htmllogo from "../../img/HTMLSVG.svg";
import csslogo from "../../img/CSSSVG.svg";
import nodelogo from "../../img/NODESVG.svg";
import reactlogo from "../../img/REACTSVG.svg";
import jslogo from "../../img/JSSVG.svg";
import officelogo from "../../img/Office.svg";
import databaselogo from "../../img/Database.svg";

function Skills() {
  const htmlcolor1 = "#e34c26";
  const csscolor1 = "rgba(38, 77, 228, 1)";
  const reactcolor1 = "#61DBFB";
  const jscolor1 = "#F0DB4F";
  const nodecolor1 = "#68A063";
  const sasscolor1 = "#cd6799";
  const officecolor1 = "#DC3E15";
  const databasecolor1 = "#4db33d";

  return (
    <SkillsStyle>
      <h1> My Skills </h1>

      <motion.div
        className='skillsdiv'
        variants={fade}
        animate='show'
        initial='hidden'
      >
        <Skill logo={htmllogo} color={htmlcolor1} />
        <Skill logo={csslogo} color={csscolor1} />
        <Skill logo={jslogo} color={jscolor1} />
        <Skill logo={reactlogo} color={reactcolor1} />
        <Skill logo={nodelogo} color={nodecolor1} />
        <Skill logo={sasslogo} color={sasscolor1} />
        <Skill logo={officelogo} color={officecolor1} />
        <Skill logo={databaselogo} color={databasecolor1} />
      </motion.div>
    </SkillsStyle>
  );
}

export default Skills;

const SkillsStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #1c1d20;
  .skillsdiv {
    height: 70vh;
    width: 70%;

    display: grid;
    place-items: center;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
`;
