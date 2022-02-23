import React from "react";
import styled from "styled-components";
import ServiceCard from "../ServiceCard";

function Services() {
  return (
    <ServicesStyle>
      <div></div>
    </ServicesStyle>
  );
}

export default Services;

const ServicesStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  /* justify-content: center; */
  align-items: center;

  height: 70vh;

  .singleservice {
    width: 100%;
  }
`;
