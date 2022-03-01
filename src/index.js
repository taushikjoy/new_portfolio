import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyle } from "./Styles/GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Projectdetail from "./components/sections/Projectdetail";

ReactDOM.render(
  <>
    <GlobalStyle />

    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<App />} />
        <Route path='/project/:id' element={<Projectdetail />} />
      </Routes>
    </BrowserRouter>
  </>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
