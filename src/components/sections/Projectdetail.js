import React, { useState, useEffect } from "react";
import styled from "styled-components";
//
import { useLocation } from "react-router-dom";
import { ProjectState } from "../../ProjectState";

//
// import projectimage1 from "../../img/omnifood.jpg";
// import projectimage2 from "../../img/guess.jpg";
// import projectimage3 from "../../img/music.jpg";
import github from "../../img/github.png";
import live from "../../img/live.png";
import { motion } from "framer-motion";

import {
  fadedetail,
  projectimageone,
  projectimagetwo,
  projectimagethree,
} from "../../Styles/Pageanimation";
import Aboutme from "./Aboutme";

function Projectdetail() {
  //

  //
  //

  const location = useLocation();
  const url = location.pathname;
  console.log(url);
  const [projects, setProjects] = useState(ProjectState);
  const [project, setProject] = useState(null);

  useEffect(() => {
    const currentProject = projects.filter(
      (stateProject) => stateProject.url === url
    );
    setProject(currentProject[0]);
  }, [projects, url, project]);

  //
  return (
    <>
      {" "}
      {project && (
        <ProjectDetailStyle>
          <h1>{project.title}</h1>
          <motion.div
            variants={fadedetail}
            initial='hidden'
            animate='show'
            className='container'
          >
            <div className='detail'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat dignissimos dolor illo, tenetur porro sapiente sit
                dolore excepturi nisi quis maxime totam sequi accusamus velit
                tempore at nobis! Molestias, repellat? Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Officiis quod, perferendis
                obcaecati natus, debitis quidem necessitatibus culpa porro hic
                soluta consequuntur tempora, expedita tenetur aspernatur
                deleniti ducimus facere perspiciatis quisquam?
              </p>
              <div className='tools'>
                <a href='#'>Javascript</a>
                <a href='#'>..bb</a>
                <a href='#'>...cc</a>
                <a href='#'>...dd</a>
                <a href='#'>...ee</a>
              </div>

              <div className='livelink'>
                <a href={project.githubRepo} className='btn1'>
                  <img src={github} alt='' />
                </a>
                <a href={project.liveLink} className='btn2'>
                  <img src={live} alt='' />
                </a>
              </div>
            </div>
            <div className='images'>
              <motion.div variants={projectimageone} className='image1 image'>
                <img src={project.fisrtImage} alt='' />
              </motion.div>
              <motion.div variants={projectimagetwo} className='image2 image'>
                <img src={project.secondImage} alt='' />
              </motion.div>
              <motion.div variants={projectimagethree} className='image3 image'>
                <img src={project.thirddImage} alt='' />
              </motion.div>
            </div>
          </motion.div>
        </ProjectDetailStyle>
      )}
    </>
  );
}

export default Projectdetail;

const ProjectDetailStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #333;

  h1 {
    margin-top: 2rem;
    color: white;
    @media (max-width: 720px) {
      font-size: 30px;
    }
  }

  .container {
    display: flex;
    width: 85%;
    background: #333;
    /* height: 100vh; */
    margin-top: 3rem;
    /* position: relative; */

    @media (max-width: 720px) {
      display: flex;
      flex-direction: column-reverse;
    }

    .detail {
      @media (max-width: 720px) {
        padding: 0.5rem 0.5rem;
        gap: 2rem;
      }
      flex: 2;

      padding: 5rem 5rem;
      position: relative;
      display: flex;
      flex-direction: column;
      p {
        font-size: 1.5rem;
        color: white;
      }
      .tools {
        display: flex;
        justify-content: space-between;
        margin-top: 5rem;

        a {
          text-decoration: none;
          color: white;
        }
      }
      .livelink {
        position: absolute;
        bottom: 20%;
        display: flex;
        justify-content: space-between;
        width: 70%;
        @media (max-width: 720px) {
          bottom: 7%;
          width: 90%;
        }
        .btn1 {
          border: none;
          outline: none;
          background: transparent;
          position: relative;
          /* overflow: hidden; */
          z-index: 2;
          cursor: pointer;
          :after {
            content: "";
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            height: 70%;
            width: 70%;
            display: block;
            border-radius: 50%;
            background: white;
            opacity: 1;
            z-index: -1;
            /* transform: translateX(0%);
              transition: transform 0.5s ease; */
          }

          img {
            height: 4rem;
            z-index: 100;
          }
        }
        .btn2 {
          border: none;
          outline: none;
          background: transparent;
          cursor: pointer;

          img {
            height: 4rem;
            z-index: 100;
          }
        }
      }
    }

    .images {
      flex: 3;
      display: grid;
      grid-template-columns: repeat(16, 1fr);
      grid-template-rows: repeat(12, 1fr);
      @media (max-width: 720px) {
        padding-right: 0.5rem;
      }

      .image {
        img {
          object-fit: cover;
        }
      }

      .image1 {
        grid-column: 1/8;
        grid-row: 4/8;
        z-index: 50;
        img {
          width: 32rem;
          height: 18rem;
        }
        @media (max-width: 720px) {
          img {
            width: 15rem;
            height: 12rem;
          }
        }
      }
      .image2 {
        grid-column: 7/14;
        grid-row: 7/12;
        z-index: 100;
        img {
          width: 32rem;
          height: 18rem;
        }
        @media (max-width: 720px) {
          img {
            width: 14rem;
            height: 12rem;
          }
        }
      }
      .image3 {
        grid-column: 9/15;
        grid-row: 2/9;
        img {
          width: 22rem;
          height: 25rem;
        }
        @media (max-width: 720px) {
          img {
            width: 11rem;
            height: 16rem;
          }
        }
      }

      /* img {
        width: 28rem;
        height: 15rem;
      } */
    }
  }
`;
