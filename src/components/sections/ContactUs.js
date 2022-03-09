import React, { useState, useRef } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import {
  contactanimeOne,
  contactanimeTwo,
  fade,
} from "../../Styles/Pageanimation";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Result = () => {
  return (
    <p>
      {" "}
      Your Message has been successfully sent . I will reach out to you soon !
      😃{" "}
    </p>
  );
};

function ContactUs() {
  //emailjs config
  const form = useRef();

  const [result, showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "template_8usjwan", e.target, "0VOcSoIhXiwgZC88n")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };
  //
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
            height='100%'
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

          <form className='the-form' action='' onSubmit={sendEmail}>
            <div className='name-form'>
              <label htmlFor='fullname'>Name</label>
              <input type='text' name='fullname' />
            </div>
            <div className='name-form'>
              <label htmlFor='email'>E-mail</label>
              <input type='text' name='email' />
            </div>
            <div className='name-form'>
              <label htmlFor='message'>Message</label>
              <textarea name='message' id='' cols='30' rows='5'></textarea>
            </div>
            <div className='row'>{result ? <Result /> : null}</div>
            <button>Send message</button>
          </form>
        </motion.div>
      </div>
    </ContactusStyle>
  );
}

export default ContactUs;

const ContactusStyle = styled(motion.div)`
  @media (max-width: 720px) {
    padding: 0.5rem 0;
    height: 100%;
  }

  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #222222;
  color: #faf7ff;
  height: calc(100vh - 70px);
  padding: 0rem 0rem 3rem 0rem;

  h2 {
    margin: 1rem 0.5rem;
  }

  .innerdiv {
    @media (max-width: 720px) {
      width: 90%;

      flex-direction: column-reverse;
    }

    display: flex;
    height: 80%;
    gap: 1px;
    width: 70%;
    box-shadow: 0 20px 80px 0 rgb(0 0 0 / 55%);

    .aboutme {
      background-color: #7f7e87;
      flex: 1;
      padding: 1rem;
      @media (max-width: 720px) {
      }
    }

    .contactfrom {
      flex: 1;
      color: white;
      /* height: 100%; */
      background-color: #25232e;
      padding: 6rem 3rem;
      @media (max-width: 720px) {
        flex: 1;
        padding: 3rem 1rem;
      }

      .the-form {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        margin-top: 2rem;

        button {
          width: 20%;
          height: 2rem;
        }
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
