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
  const [element, view] = useInView({ threshold: 0.6 });
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
      <h2>Contact me</h2>
      <div className='innerdiv'>
        <motion.div variants={contactanimeTwo} className='aboutme'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1086.0911548708057!2d90.44108733732739!3d23.705956999023538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9d1d42e5fc5%3A0x9175e956246e70a2!2zMjPCsDQyJzIzLjMiTiA5MMKwMjYnMjcuNSJF!5e0!3m2!1sen!2sbd!4v1645686211954!5m2!1sen!2sbd'
            width='100%'
            height='90%'
            style='border:0;'
            allowFullScreen=''
            style={{ border: 0 }}
            loading='lazy'
          ></iframe>
          <div></div>
        </motion.div>
        <motion.div variants={contactanimeOne} className='contactfrom'>
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #222222;
  color: #faf7ff;

  .innerdiv {
    display: flex;
    height: 80%;
    gap: 1px;
    width: 70%;
    box-shadow: 0 20px 80px 0 rgb(0 0 0 / 55%);

    .aboutme {
      background-color: #7f7e87;
      flex: 1;
      padding: 1rem;
    }

    .contactfrom {
      flex: 1;
      color: white;

      background-color: #25232e;
      padding: 6rem 3rem;

      .the-form {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        margin-top: 2rem;
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
