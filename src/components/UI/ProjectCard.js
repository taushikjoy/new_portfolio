import React from "react";
import styled from "styled-components";
import testimage from "../../img/the-racer2.jpg";

function ProjectCard() {
  return (
    <ProjectCardStyle>
      <div className='descrip'>
        <h1>Project Name</h1>
        <p>this a ..... project</p>
        <button>Case Study</button>
      </div>
    </ProjectCardStyle>
  );
}

export default ProjectCard;

const ProjectCardStyle = styled.div`
  width: 100%;
  background: url(${testimage});
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
    transition: transform 2s ease;
    opacity: 0;
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
        left: -50%;
        width: 50%;
        height: 100%;
        background: linear-gradient(270deg, #235aa6, #101b3b);
        z-index: 10;
        /* transform: translateX(0%); */
        /* transition: transform 0.5s ease; */
      }
      &:hover {
        :after {
          transform: translateX(300%);
          transition: transform 0.4s ease-out;
        }
      }
    }
  }
`;

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
