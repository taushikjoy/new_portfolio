import React from "react";
import styled from "styled-components";
import projectimage1 from "../../img/omnifood.jpg";
import projectimage2 from "../../img/guess.jpg";
import projectimage3 from "../../img/music.jpg";
import github from "../../img/github.png";
import live from "../../img/live.png";
import { motion } from "framer-motion";
import {
  fadedetail,
  projectimageone,
  projectimagetwo,
  projectimagethree,
} from "../../Styles/Pageanimation";

function Projectdetail() {
  return (
    <ProjectDetailStyle>
      <h1>Demo title</h1>
      <motion.div
        variants={fadedetail}
        initial='hidden'
        animate='show'
        className='container'
      >
        <div className='detail'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            dignissimos dolor illo, tenetur porro sapiente sit dolore excepturi
            nisi quis maxime totam sequi accusamus velit tempore at nobis!
            Molestias, repellat? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Officiis quod, perferendis obcaecati natus,
            debitis quidem necessitatibus culpa porro hic soluta consequuntur
            tempora, expedita tenetur aspernatur deleniti ducimus facere
            perspiciatis quisquam?
          </p>
          <div className='tools'>
            <a href='#'>Javascript</a>
            <a href='#'>..bb</a>
            <a href='#'>...cc</a>
            <a href='#'>...dd</a>
            <a href='#'>...ee</a>
          </div>

          <div className='livelink'>
            <button className='btn1'>
              <img src={github} alt='' />
            </button>
            <button className='btn2'>
              <img src={live} alt='' />
            </button>
          </div>
        </div>
        <div className='images'>
          <motion.div variants={projectimageone} className='image1'>
            <img src={projectimage1} alt='' />
          </motion.div>
          <motion.div variants={projectimagetwo} className='image2'>
            <img src={projectimage2} alt='' />
          </motion.div>
          <motion.div variants={projectimagethree} className='image3'>
            <img src={projectimage3} alt='' />
          </motion.div>
        </div>
      </motion.div>
    </ProjectDetailStyle>
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
  }

  .container {
    display: flex;
    width: 85%;
    background: #333;
    /* height: 100vh; */
    margin-top: 3rem;
    /* position: relative; */

    .detail {
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

      .image1 {
        grid-column: 1/8;
        grid-row: 4/8;
        z-index: 50;
        img {
          width: 32rem;
          height: 18rem;
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
      }
      .image3 {
        grid-column: 9/15;
        grid-row: 2/9;
        img {
          width: 20rem;
          height: 25rem;
        }
      }

      /* img {
        width: 28rem;
        height: 15rem;
      } */
    }
  }
`;
