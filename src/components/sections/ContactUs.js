import React from "react";
import styled from "styled-components";
import {
  contactanimeOne,
  contactanimeTwo,
  fade,
} from "../../Styles/Pageanimation";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function ContactUs() {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: 0.5 });
  if (view) {
    controls.start("show");
  }

  return (
    <ContactusStyle
      ref={element}
      variants={fade}
      initial='hidden'
      animate={controls}
    >
      <div className='innerdiv'>
        <motion.div
          variants={contactanimeTwo}
          className='aboutme'
          // initial='hidden'
          // animate={controls}
        >
          sdf
        </motion.div>
        <motion.div
          variants={contactanimeOne}
          className='contactfrom'
          // initial='hidden'
          // animate={controls}
        >
          <h1>Let's talk</h1>
          <p>New projects,freelance inquire or even a coffee</p>

          <form className='the-form' action=''>
            <div className='name-form'>
              <label htmlFor='name'>Name</label>
              <input type='text' name='name' />
            </div>
            <div className='name-form'>
              <label htmlFor='email'>E-mail</label>
              <input type='text' name='email' />
            </div>
            <div className='name-form'>
              <label htmlFor='message'>Message</label>
              <textarea name='message' id='' cols='30' rows='5'></textarea>
            </div>
          </form>
          <button>Send message</button>
        </motion.div>
      </div>
    </ContactusStyle>
  );
}

export default ContactUs;

const ContactusStyle = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  .innerdiv {
    display: flex;

    height: 80%;
    gap: 1px;
    width: 70%;

    .aboutme {
      background-color: #f5f0e4;
      flex: 1;
    }

    .contactfrom {
      flex: 1;

      background-color: brown;
      padding: 6rem 3rem;

      .the-form {
        display: flex;
        flex-direction: column;
        gap: 2rem;
      }

      input,
      textarea {
        border: 0;
        appearance: none;
        display: block;
        width: 100%;
        margin: 0;
        border-bottom: 2px solid silver;
        padding: 8px 5px;
        font-size: 0.875em;
        border-radius: 0;
        background: transparent;
        color: silver;
        transition: border-color 0.25s;
        outline: none;
      }
    }
  }
`;
