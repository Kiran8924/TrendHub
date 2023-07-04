import React from "react";
import Storycard from "../storycard/Storycard";
import { Users } from "../../data";
import "./stories.scss";

const Stories = () => {
  return (
    <div className="stories">
      <div className="storyCard">
        <div className="overlay"></div>
        <img src="/assets/person/img1.jpg" alt="" className="storyProfile" />
        <img src="/assets/person/img1.jpg" alt="" className="storybackground" />
        <img src="/assets/person/upload.png" alt="" className="storyadd" />
        <span className="text">Kiran</span>
      </div>

      {Users.map((u) => (
        <Storycard key={u.id} user={u} />
      ))}
    </div>
  );
};

export default Stories;