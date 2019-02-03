import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";

class LoginNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      avatar: ""
    };
  }

  componentDidMount = e => {
    // retrieve avatar and userid
    if (localStorage.jwtToken) {
      setAuthToken(localStorage.jwtToken);
      axios
        .get("/api/users/current")
        .then(res => {
          this.setState({ avatar: res.data.avatar });
        })
        .catch(err => {
          console.log(err.response.data);
        });
    }
  };

  onClick = e => {
    e.preventDefault();
    localStorage.removeItem("jwtToken");
    location.href = "/";
  };

  onImgClick = e => {
    this.props.history.push("/dashboard");
  };

  render() {
    return (
      <nav
        className="navbar navbar-expand-md navbar-light fixed-top navbar-light bg-light"
        id="mainNav"
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            Bloggy
          </Link>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarResponsive">
            <div class="ml-auto">
              <SearchBar />
            </div>
            <ul className="navbar-nav ml-auto">
              {/* <li className="nav-item mr-auto">
                
              </li> */}
              <li className="nav-item">
                <img
                  className="profile-img mt-1"
                  alt="profile picture"
                  src={this.state.avatar}
                  onClick={this.onImgClick}
                />
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#" onClick={this.onClick}>
                  Log Out
              </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default LoginNavbar;
