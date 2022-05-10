import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyle } from "./Styles/GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Projectdetail from "./components/sections/Projectdetail";
import Aboutme from "./components/sections/Aboutme";
import AboutMeSection from "./components/AboutMe/AboutMeSection";
import EduactionSection from "./components/AboutMe/EduactionSection";
import WorkSection from "./components/AboutMe/WorkSection";

ReactDOM.render(
  <>
    <GlobalStyle />

    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<App />} />
        <Route path='/aboutme' exact element={<Aboutme />}>
          <Route path='' element={<AboutMeSection/>}/>
          <Route path='edusec' element={<EduactionSection/>}/>
          <Route path='worksec' element={<WorkSection/>}/>
        </Route>
        <Route path='/project/:id' element={<Projectdetail />} />
      </Routes>
    </BrowserRouter>
  </>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
