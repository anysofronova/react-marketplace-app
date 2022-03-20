import React from "react";
import stores from "../sample-stores";
import "./scss/Landing.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

class Landing extends React.Component {
  state = {
    display: false,
    title: "",
    url: "",
  };

  displayList = () => {
    const { display } = this.state;
    this.setState({ display: !display });
  };
  getTitle = (store) => {
    const { title, url } = store;
    this.setState({ title, url, display: false });
  };

  render() {
    return (
      <div className="marketplase__select">
        <div className="marketplase__select-top">
          <div
            onClick={this.displayList}
            className="marketplase__select-top-header"
          >
            {this.state.title ? this.state.title : "Choose your store"}
          </div>
          <div className="arrow__picker">
            <div className="arrow__picker-down">
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
          </div>
        </div>

        {this.state.display ? (
          <div className="marketplase__select-bottom">
            <ul>
              {stores.map((i) => (
                <li onClick={() => this.getTitle(i)} key={i.id}>
                  {i.title}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {this.state.title && !this.state.display ? (
          <Link to={`/store/${this.state.url}`} className="navbar__logo">
            <button>
              <span>GO TO STORE</span>
            </button>
          </Link>
        ) : null}
      </div>
    );
  }
}

export default Landing;
