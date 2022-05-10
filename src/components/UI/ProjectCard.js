import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import testimage from "../../img/the-racer2.jpg";
// import { Link } from "react-router-dom";
// import projectState from "../../ProjectState";

function ProjectCard({ setSingleProject, proj }) {
  // const [projectState, setProjectState] = useState(projectState());

  const ProjectCardStyle = styled.div`
    @media (max-width: 720px) {
      height: 25vh;
      width: 100%;
      position: relative;

      h1 {
        font-size: 1rem;
      }
      p {
        font-size: 0.8rem;
      }
    }

    width: 100%;
    cursor: pointer;
    background: url(${proj.coverPhoto});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 50vh;

    position: relative;
    z-index: 0;
    overflow: hidden;
    :after {
      content: "";
      position: absolute;
      left: -100%;
      top: 0;
      height: 100%;
      width: 100%;
      display: block;
      background: linear-gradient(270deg, #365177, #071746);
      opacity: 0.7;
      z-index: 1;
      transform: translateX(0%);
      transition: transform 0.5s ease;
    }

    &:hover {
      :after {
        transform: translateX(100%);
        transition: transform 0.5s ease-out;
      }
      .descrip {
        /* transition: transform 2s ease; */
        opacity: 1;
        transform: scale(1.1) translateZ(0);
      }
    }

    .descrip {
      position: absolute;
      bottom: 5rem;
      left: 4rem;
      line-height: 1.9rem;
      color: white;
      z-index: 4;
      transition: transform 1s ease;
      opacity: 0;

      @media (max-width: 720px) {
        position: absolute;
        top: 5.2rem;
        left: 1rem;

        height: 20%;
        width: 40%;
      }
      button {
        width: 8rem;
        height: 3rem;
        overflow: hidden;
        position: relative;
        border: none;
        background: linear-gradient(270deg, #f06449, #ef3636);
        color: #fafafa;
        cursor: pointer;
        :after {
          content: "";
          position: absolute;
          top: 0;
          left: -60%;
          width: 50%;
          height: 100%;
          background: linear-gradient(270deg, #235aa6, #101b3b);
          transform: skewX(-15deg);
          z-index: 10;
          /* transform: translateX(0%); */
          /* transition: transform 0.5s ease; */
        }
        &:hover {
          :after {
            transform: translateX(350%);
            transition: transform 0.4s ease-out;
          }
        }
        @media (max-width: 720px) {
          font-size: 0.6rem;
          width: 3rem;
          height: 2rem;
        }
      }
    }
  `;
  return (
    <ProjectCardStyle>
      <div className='descrip'>
        <h1>{proj.title}</h1>
        <p>{proj.desc}</p>
        <Link to={proj.url}>
          <button>Case Study</button>
        </Link>
      </div>
    </ProjectCardStyle>
  );
}

export default ProjectCard;

/* .cover:after {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  display: block;
  content: " ";
  background: red;
  opacity: 0.6;
  transition: opacity 0.3s ease;
  z-index: -1;
} */
