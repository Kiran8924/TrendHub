import React from "react";
import { Link } from "react-router-dom";
import "./profileRightBar.scss";

const ProfileRightBar = () => {
  return (
    <div className="profileRightBar">
      <div className="profileRightBarHeading">
        <span className="profileRightBarTitle"> User Information</span>
        <Link to="/profile/userId/edit" style={{ textDecoration: "none" }}>
          <span className="editButton">Edit Profile</span>
        </Link>
      </div>

      <div className="profileRightBarInfo">
        <div className="profileRightBarInfoItem">
          <span className="profileRightBarInfoKey">Email: </span>
          <span className="profileRightBarInfoValue">kirangupta2002892@gamil.com</span>
        </div>
        <div className="profileRightBarInfoItem">
          <span className="profileRightBarInfoKey">Phone Number: </span>
          <span className="profileRightBarInfoValue">+91 8924988784</span>
        </div>
        <div className="profileRightBarInfoItem">
          <span className="profileRightBarInfoKey">Address: </span>
          <span className="profileRightBarInfoValue">
          Kanpur
          </span>
        </div>
        <div className="profileRightBarInfoItem">
          <span className="profileRightBarInfoKey">Country: </span>
          <span className="profileRightBarInfoValue">India</span>
        </div>
        <div className="profileRightBarInfoItem">
          <span className="profileRightBarInfoKey">Relationship: </span>
          <span className="profileRightBarInfoValue">Single</span>
        </div>
      </div>

      <h4 className="profileRightBarTitle">Close Friends</h4>
      <div className="profileRightBarFollowings">
        <div className="profileRightBarFollowing">
          <img
            src="/assets/person/friend1.jpg"
            alt=""
            className="profileRightBarFollowingImg"
          />
          <span className="profileRightBarFollowingName">Jannat</span>
        </div>
        <div className="profileRightBarFollowing">
          <img
            src="/assets/person/friend2.jpg"
            alt=""
            className="profileRightBarFollowingImg"
          />
          <span className="profileRightBarFollowingName">Isha</span>
        </div>
        <div className="profileRightBarFollowing">
          <img
            src="/assets/person/friend3.jpg"
            alt=""
            className="profileRightBarFollowingImg"
          />
          <span className="profileRightBarFollowingName">Divya</span>
        </div>
        <div className="profileRightBarFollowing">
          <img
            src="/assets/person/friend4.jpg"
            alt=""
            className="profileRightBarFollowingImg"
          />
          <span className="profileRightBarFollowingName">Shama</span>
        </div>
        <div className="profileRightBarFollowing">
          <img
            src="/assets/person/friend5.jpg"
            alt=""
            className="profileRightBarFollowingImg"
          />
          <span className="profileRightBarFollowingName">Priya</span>
        </div>
        <div className="profileRightBarFollowing">
          <img
            src="/assets/person/friend6.jpg"
            alt=""
            className="profileRightBarFollowingImg"
          />
          <span className="profileRightBarFollowingName">kate</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileRightBar;
