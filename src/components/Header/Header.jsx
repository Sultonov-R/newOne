import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header-wrapper">
      <div className="logo">
        <a href="/">
          <img src="../../image.png" alt="logo" />
        </a>
      </div>
      <div className="nav-direction">
        <ul>
          <li><a href="#demo">Demo</a></li>
          <li>
            <a href="#aboutUs">Biz haqimizda</a>
          </li>
          <li>
            <a href="#partners">Mijozlar</a>
          </li>
          <li>
            <a href="#footer">Bog'lanish</a>
          </li>
        </ul>
      </div>
      <div className="demo-btn">
        <a href="#">Demo olish</a>
      </div>
    </div>
  );
}

export default Header;
