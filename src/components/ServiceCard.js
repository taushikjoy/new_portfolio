import React from "react";
import webdev from "../img/webdev.png";
import styled from "styled-components";

function ServiceCard() {
  return (
    <ServiceCardStyle>
      <div>
        <img
          src={webdev}
          alt=''
          style={{
            filter:
              "invert(63%) sepia(94%) saturate(361%) hue-rotate(354deg) brightness(95%) contrast(94%)",
          }}
        />
        {/* <FontAwesomeIcon icon='fa-brands fa-algolia' /> */}
      </div>
    </ServiceCardStyle>
  );
}

const ServiceCardStyle = styled.div`
  border: 1px solid black;
`;

export default ServiceCard;
