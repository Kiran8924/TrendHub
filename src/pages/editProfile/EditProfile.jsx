import { DriveFolderUploadOutlined } from "@mui/icons-material";
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./editProfile.scss";

const EditProfile = () => {
  return (
    <div className="editProfile">
      <Navbar />
      <div className="editProfileWrapper">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src="/assets/profileCover/profilecover.jpg"
                alt=""
                className="profileCoverImg"
              />
              <img
                src="/assets/person/img1.jpg"
                alt=""
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Kiran Gupta</h4>
              <span className="profileInfoDesc">Hi Friends!</span>
            </div>
          </div>
          <div className="editprofileRightBottom">
            <div className="top">
              <h1>Edit User Profile</h1>
            </div>
            <div className="bottom">
              <div className="left">
                <img src="/assets/profileCover/DefaultProfile.jpg" alt="" />
              </div>
              <div className="right">
                <form>
                  <div className="formInput">
                    <label htmlFor="file">
                      Image: <DriveFolderUploadOutlined className="icon" />
                    </label>
                    <input type="file" id="file" style={{ display: "none" }} />
                  </div>
                  <div className="formInput">
                    <label>Name</label>
                    <input type="text" placeholder="Kiran Gupta" />
                  </div>
                  <div className="formInput">
                    <label>Username</label>
                    <input type="text" placeholder="Kiran Gupta" />
                  </div>
                  <div className="formInput">
                    <label>Email</label>
                    <input type="email" placeholder="kirangupta2002892@gmail.com" />
                  </div>
                  <div className="formInput">
                    <label>Phone</label>
                    <input type="text" placeholder="+91 8924988784" />
                  </div>
                  <div className="formInput">
                    <label>Address</label>
                    <input
                      type="text"
                      placeholder="Kanpur"
                    />
                  </div>
                  <div className="formInput">
                    <label>Country</label>
                    <input type="text" placeholder="India" />
                  </div>
                  <button type="submit" className="updateButton">
                    Update Profile
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;