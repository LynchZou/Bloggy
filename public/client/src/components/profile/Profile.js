import React from "react";
import Favorite from "./Favorite";
import axios from "axios";
import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";
import Unauthorized from "../utils/Unauthorized";

import ProfileContent from "./ProfileContent";
export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("jwtToken");
    this.state = {
      token
    };
  }

  onClickPost = post_id => {
    this.props.history.push(`/view/${post_id}`);
  };

  render() {
    return (
      <div className="container my-5" style={{ paddingTop: "65px" }}>
        <div className="row justify-content-md-center">
        
          <div className="col-sm-10 col-md-12 mx-auto">
            <Favorite />
            
            <ProfileContent
              onClickPost={this.onClickPost}
              userid={this.props.match.params.userid}
            />
          </div>
        </div>
      </div>
    );
  }
}
