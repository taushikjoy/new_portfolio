import React from "react";
import ProjectCard from "../UI/ProjectCard";
import styled from "styled-components";
import { Link } from "react-router-dom";
import projectCover1 from "../../img/capture.jpg";
import projectCover2 from "../../img/musiccover.jpg";
import projectone3 from "../../img/projectone3.jpg";

function Projects() {
  return (
    <ProjectsStyle>
      <h1>Latest Works</h1>
      <div className='cards'>
        <div className='abcd abcd1'>
          <Link to='/project/capture'>
            <ProjectCard coverPhoto={projectCover1} />
          </Link>
        </div>
        <div className='abcd abcd2'>
          <Link to='/project/racer'>
            <ProjectCard coverPhoto={projectCover2} />
          </Link>
        </div>
        <div className='abcd abcd3'>
          <ProjectCard />
        </div>
        <div className='abcd abcd4'>
          <ProjectCard />
        </div>
      </div>
    </ProjectsStyle>
  );
}

export default Projects;

const ProjectsStyle = styled.div`
  background: radial-gradient(ellipse at center, #17202b 30%, #06070a 100%);
  padding-top: 4 rem;

  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: white;
  }
  /* margin-bottom: 5rem; */

  .cards {
    height: 100%;
    width: 60%;
    display: grid;
    justify-content: center;
    gap: 1rem;
    grid-template-columns: repeat(16, 1fr);

    /* grid-template-rows: repeat(3, 1fr); */
  }

  .abcd {
    box-shadow: 0 20px 80px 0 rgb(0 0 0 / 45%);
    margin: 3rem;
  }
  .abcd1 {
    grid-column: 2/16;
    /* box-shadow: 0 20px 80px 0 rgb(0 0 0 / 45%); */
  }
  .abcd2 {
    grid-column: 1/15;
  }
  .abcd3 {
    grid-column: 2/16;
  }
  .abcd4 {
    grid-column: 1/15;
  }

  @media (max-width: 720px) {
    .cards {
      width: 100%;
      height: 100%;

      padding: 0;
    }
    .abcd {
      width: 90%;
      height: auto;
      margin: 0.5rem auto;
    }
  }
`;
