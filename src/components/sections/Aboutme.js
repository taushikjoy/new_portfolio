import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import dog from "../../img/dog.jpg";
import { AboutMeState } from "../../AboutMeState";
function Aboutme() {
  const [numof, setNumof] = useState(AboutMeState);
  const [numofabout, setNumofabout] = useState(null);

  //
  const location = useLocation();
  const url = location.pathname;
  //

  useEffect(() => {
    const numProject = numof.filter((item) => item.url === url);
    console.log(url);
    setNumofabout(numProject[0]);
  }, [url, numofabout, numof]);

  return (
    <AboutMeStyle>
      {/* <div className='logo'> taj </div> */}
      <div className='menubar'>
        <ul>
          <li>
            <Link to='/aboutme'>
              <a href='#asd'> About Me </a>
            </Link>
          </li>
          <li>
            <Link to='/aboutme/edusec'>
              <a href='#asd'> Education</a>
            </Link>
          </li>
          <li>
            <Link to='/aboutme/worksec'>
              <a href='#asd'> Work</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className='container'>
        <Outlet/>
      </div>
      {/* <div className='footer'>asd</div> */}
    </AboutMeStyle>
  );
}

const AboutMeStyle = styled.div`
  margin: 10rem;

  .menubar ul {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin: 3rem 0;
  }
  .container {
    width: 70%;
    display: flex;
    margin-left: 8rem;
    gap: 2rem;

    .image {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
    }

    img {
      height: 12rem;
      width: 12rem;
      border-radius: 50%;
    }
  }

  .desc {
    flex: 2;
    line-height: 30px;
  }
`;

export default Aboutme;
