import React, { useState } from "react";
import stores from "../sample-stores";
import "./scss/Landing.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Landing = () => {
  const [display, setDisplay] = useState(false);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const displayList = () => {
    setDisplay(!display);
  };

  const getTitle = (store) => {
    const { title, url } = store;
    setTitle(title);
    setUrl(url);
    setDisplay(false);
  };

  return (
    <div className="marketplase__select">
      <div className="marketplase__select-top">
        <div onClick={displayList} className="marketplase__select-top-header">
          {title ? title : "Choose your store"}
        </div>
        <div className="arrow__picker">
          <div className="arrow__picker-down">
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </div>
      </div>

      {display ? (
        <div className="marketplase__select-bottom">
          <ul>
            {stores.map((i) => (
              <li onClick={() => getTitle(i)} key={i.id}>
                {i.title}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {title && !display ? (
        <Link to={`/store/${url}`} className="navbar__logo">
          <button>
            <span>GO TO STORE</span>
          </button>
        </Link>
      ) : null}
    </div>
  );
};

export default Landing;
