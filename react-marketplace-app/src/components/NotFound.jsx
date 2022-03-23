import React from "react";
import "./scss/NotFound.scss";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="notFound">
      <div class="notFound__face">
        <div class="notFound__band">
          <div class="notFound__red"></div>
          <div class="notFound__white"></div>
          <div class="notFound__blue"></div>
        </div>
        <div class="notFound__eyes"></div>
        <div class="notFound__dimples"></div>
        <div class="notFound__mouth"></div>
      </div>

      <h1 className="notFound__title">Oops! Something went wrong!</h1>
      <Link to={"/"}>
        <div class="notFound__btn">Return to Home</div>
      </Link>
    </div>
  );
}

export default NotFound;
