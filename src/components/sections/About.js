import React from "react";
import styled from "styled-components";
import joy from "../../img/dog.jpg";

import { motion } from "framer-motion";
import {
  titleAnime,
  fade,
  photoAnime,
  pageAnimation,
} from "../../Styles/Pageanimation";

import Wave from "../Wave";

function About() {
  return (
    <AboutStyle
      // exit='exit'
      variants={pageAnimation}
      initial='hidden'
      animate='show'
    >
      <Description>
        <div className='title'>
          <Hide>
            <motion.h2 variants={titleAnime}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnime}>
              your <span>dreams</span> come{" "}
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnime}>true.</motion.h2>
          </Hide>
        </div>
        <motion.p variants={fade}>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          inventore aliquid,
        </motion.p>
        <motion.button variants={fade}>contact us</motion.button>
      </Description>

      <Image>
        <motion.img variants={photoAnime} src={joy} alt='a photographer' />
      </Image>

      <Wave />
    </AboutStyle>
  );
}

export default About;

const AboutStyle = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: black;
  margin-top: 0rem;
`;

const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  z-index: 2;
  h2 {
    font-weight: lighter;
  }
`;

const Image = styled.div`
  flex: 1;
  overflow: hidden;
  z-index: 2;
  img {
    width: 90%;
    height: 80vh;
    object-fit: cover;
    z-index: 2;
    border-radius: 50%;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
