import React from "react";
import HTML from "../Asset/img/html5.png";
import CSS from "../Asset/img/CSS lo.png";
import JavaScript from "../Asset/img/JS lo.png";
import Bootstrap from "../Asset/img/bootstrap lo.png";
import ReactImg from "../Asset/img/react lo.png";
import nodejs from "../Asset/img/nodejs.png";
import mongodb from "../Asset/img/mongodb.png";
import aws from "../Asset/img/aws.png";
import github from "../Asset/img/github.png";
import firebase from "../Asset/img/firebase.png";
import pusher from "../Asset/img/pusher.jpg";
import reactBootstrapLogo from "../Asset/img/reactBootstrapLogo.jpg";
import expresslogo from "../Asset/img/express-node.jpg";

function Skill() {
  return (
    <div className="skills-d py-1" id="Skills">
      <div className="container-fluid">
        <div className="text-center">
          <div className="skill-details">Skills</div>
        </div>
        <div className="row post-grid d-flex justify-content-center ">
          <div className="col-md-6 col-lg-2  skill-box my-5 mx-4">
            <div className="d-flex justify-content-center my-4">
              <img src={HTML} className="skill-img" alt="" />
            </div>
          </div>

          <div className="col-md-6 col-lg-2  skill-box my-5 mx-4">
            <div className="d-flex justify-content-center my-4">
              <img src={CSS} className="skill-img" alt="" />
            </div>
          </div>

          <div className="col-md-6 col-lg-2  skill-box my-5 mx-4">
            <div className="d-flex justify-content-center my-4">
              <img src={JavaScript} className="skill-img" alt="" />
            </div>
          </div>

          <div className="col-md-6 col-lg-2  skill-box my-5 mx-4">
            <div className="d-flex justify-content-center my-4">
              <img src={Bootstrap} className="skill-img" alt="" />
            </div>
          </div>

          <div className="col-md-6 col-lg-2  skill-box my-5 mx-4">
            <div className="d-flex justify-content-center my-4">
              <img src={mongodb} className="skill-img" alt="" />
            </div>
          </div>

          <div className="col-md-6 col-lg-2  skill-box my-5 mx-4 ">
            <div className="d-flex justify-content-center my-4">
              <img src={expresslogo} className="skill-img" alt="" />
            </div>
          </div>

          <div className="col-md-6 col-lg-2  skill-box my-5 mx-4">
            <div className="d-flex justify-content-center my-4 ">
              <img src={ReactImg} className="skill-img" alt="" />
            </div>
          </div>

          <div className="col-md-6 col-lg-2  skill-box my-5 mx-4">
            <div className="d-flex justify-content-center my-4">
              <img src={nodejs} className="skill-img" alt="" />
            </div>
          </div>

          <div className="col-md-6 col-lg-2  skill-box my-5 mx-4">
            <div className="d-flex justify-content-center my-4">
              <img src={aws} className="skill-img" alt="" />
            </div>
          </div>

          <div className="col-md-6 col-lg-2  skill-box my-5 mx-4">
            <div className="d-flex justify-content-center my-4">
              <img src={github} className="skill-img" alt="" />
            </div>
          </div>

          <div className="col-md-6 col-lg-2  skill-box my-5 mx-4">
            <div className="d-flex justify-content-center my-4">
              <img src={firebase} className="skill-img" alt="" />
            </div>
          </div>

          <div className="col-md-6 col-lg-2  skill-box my-5 mx-4">
            <div className="d-flex justify-content-center my-4">
              <img src={pusher} className="skill-img" alt="" />
            </div>
          </div>

          <div className="col-md-6 col-lg-2  skill-box my-5 mx-4 ">
            <div className="d-flex justify-content-center my-4">
              <img src={reactBootstrapLogo} className="skill-img" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
