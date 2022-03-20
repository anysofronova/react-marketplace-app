import React from "react";
import "./scss/Header.scss";

function Header(props) {
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__divider"></div>
        <h1>{props.title}</h1>
        <h3>
          <span>{props.subTitle}</span>
        </h3>
      </div>
    </header>
  );
}

export default Header;
