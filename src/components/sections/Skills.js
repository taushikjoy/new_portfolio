import React from "react";
import styled from "styled-components";
import Skill from "../Skill";
import sasslogo from "../../img/SASSSVG.svg";
import htmllogo from "../../img/HTMLSVG.svg";
import csslogo from "../../img/CSSSVG.svg";
import nodelogo from "../../img/NODESVG.svg";
import reactlogo from "../../img/REACTSVG.svg";
import jslogo from "../../img/JSSVG.svg";

function Skills() {
  const htmlcolor1 = "#e34c26";
  const csscolor1 = "rgba(38, 77, 228, 1)";
  const reactcolor1 = "#61DBFB";

  return (
    <SkillsStyle>
      <h1> My Skills </h1>

      <div className='skillsdiv'>
        <Skill logo={htmllogo} color={htmlcolor1} />
        <Skill logo={csslogo} color={csscolor1} />
        <Skill logo={jslogo} />
        <Skill logo={reactlogo} color={reactcolor1} />
        <Skill logo={nodelogo} />
        <Skill logo={sasslogo} />
      </div>
    </SkillsStyle>
  );
}

export default Skills;

const SkillsStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #222;
  .skillsdiv {
    display: flex;
    gap: 1rem;
  }
`;
