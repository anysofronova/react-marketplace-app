import React from "react";
import "./scss/Header.scss";
import PropTypes from "prop-types";

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

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};

export default Header;
