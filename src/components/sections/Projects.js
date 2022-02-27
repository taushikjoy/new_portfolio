import React from "react";
import ProjectCard from "../UI/ProjectCard";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <ProjectsStyle>
      <h1>Latest Works</h1>
      <div className='cards'>
        <div className='abcd abcd1'>
          <Link to='project/1234'>
            <ProjectCard />
          </Link>
        </div>
        <div className='abcd abcd2'>
          <ProjectCard />
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
  background: #f7f7f7;
  height: auto;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin-bottom: 5rem; */

  .cards {
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
`;
