import React, { useState } from "react";
import ProjectCard from "../UI/ProjectCard";
import styled from "styled-components";

import { ProjectState } from "../../ProjectState";

function Projects() {
  const [projectState, setProjectState] = useState(ProjectState);
  const [singleProject, setSingleProject] = useState(projectState[0]);
  return (
    <ProjectsStyle>
      <h1>Latest Works</h1>
      <div className='cards'>
        {projectState.map((proj) => (
          <div className={proj.class}>
            <ProjectCard
              setSingleProject={setSingleProject}
              proj={proj}
              key={proj.id}
            />
          </div>
        ))}
      </div>
    </ProjectsStyle>
  );
}

export default Projects;

const ProjectsStyle = styled.div`
  padding-top: 4 rem;

  width: 100vw;
  height: auto;

  h1 {
    color: white;
  }

  .cards {
    height: 100%;
    width: 100%;

    display: grid;
    justify-content: center;
    align-content: center;

    grid-template-columns: repeat(12, 1fr);

    grid-template-rows: repeat(3, 1fr);
  }

  .abcd {
    box-shadow: 0 20px 80px 0 rgb(0 0 0 / 45%);
    margin: 3rem;
  }
  .abcd1 {
    grid-column: 4/10;
    /* box-shadow: 0 20px 80px 0 rgb(0 0 0 / 45%); */
  }
  .abcd2 {
    grid-column: 3/9;
  }
  .abcd3 {
    grid-column: 4/10;
  }
  .abcd4 {
    grid-column: 3/9;
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
