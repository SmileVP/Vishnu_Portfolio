import React from "react";
import { Button } from "react-bootstrap";
import { CodeUrl } from "./CodeUrl";
import rental from "../Asset/img/rental.png";
import whatsappImg from "../Asset/img/whatsappImg.png";
import instag from "../Asset/img/instag.png";
import shopping from "../Asset/img/shopping.png";

function Projects() {
  return (
    //  <--Project details-->
    <div className="projects-d py-1" id="Projects">
      <div className="container-fluid">
        <div className="text-center">
          <div className="project-details">Projects</div>
        </div>
        <div className="row post-grid d-flex">
          <div class="container mt-2">
            {/* <--Rentify project details-->  */}
            <div class="card">
              <div class="face face1">
                <div class="content">
                  <img src={rental} alt="" />
                  <h3>Rentify</h3>
                </div>
              </div>
              <div class="face face2">
                <div class="content">
                  <p>
                    In this project I have used ReactJS,NodeJS,ExpressJS,
                    Mongodb,Date picker,Moment and Nodemailer
                  </p>
                  <a href={CodeUrl.rentifyFrontendGit} target={CodeUrl.blank}>
                    <Button
                      className="project-buttons"
                      type="button"
                      variant="success"
                    >
                      Frontend Source
                    </Button>
                  </a>

                  <a href={CodeUrl.rentifyBackendGit} target={CodeUrl.blank}>
                    <Button
                      className="project-buttons"
                      type="button"
                      variant="success"
                    >
                      Backend Source
                    </Button>
                  </a>
                  <a
                    href={CodeUrl.rentifyDeploy}
                    target={CodeUrl.blank}
                    className="m-2"
                  >
                    <Button
                      className="project-buttons"
                      type="button"
                      variant="success"
                    >
                      Deploy
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            {/* <--Whatsapp Clone project details-->  */}
            <div class="card">
              <div class="face face1">
                <div class="content">
                  <img src={whatsappImg} alt="" />
                  <h3>WhatsApp Clone</h3>
                </div>
              </div>
              <div class="face face2">
                <div class="content">
                  <p>
                    In this project I have used ReactJS,NodeJS,ExpressJS
                    Mongodb,Firebase,Pusher and MaterialUI
                  </p>

                  <a href={CodeUrl.whatsAppFrontendGit} target={CodeUrl.blank}>
                    <Button
                      className="project-buttons"
                      type="button"
                      variant="success"
                    >
                      Frontend Source
                    </Button>
                  </a>

                  <a href={CodeUrl.whatsAppBackendGit} target={CodeUrl.blank}>
                    <Button
                      className="project-buttons"
                      type="button"
                      variant="success"
                    >
                      Backend Source
                    </Button>
                  </a>
                  <a
                    href={CodeUrl.whatsAppDeploy}
                    target={CodeUrl.blank}
                    className="m-2"
                  >
                    <Button
                      className="project-buttons"
                      type="button"
                      variant="success"
                    >
                      Deploy
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            {/* <--Instagram Clone project details-->  */}
            <div class="card">
              <div class="face face1">
                <div class="content">
                  <img src={instag} />
                  <h3>Instagram Clone</h3>
                </div>
              </div>
              <div class="face face2">
                <div class="content">
                  <p>
                    In this project I have used ReactJS,NodeJS,ExpressJS,
                    Mongodb,Firebase and Cloudinary API
                  </p>
                  <a href={CodeUrl.instaFrontendGit} target={CodeUrl.blank}>
                    <Button
                      className="project-buttons"
                      type="button"
                      variant="success"
                    >
                      Frontend Source
                    </Button>
                  </a>

                  <a href={CodeUrl.instaBackendGit} target={CodeUrl.blank}>
                    <Button
                      className="project-buttons"
                      type="button"
                      variant="success"
                    >
                      Backend Source
                    </Button>
                  </a>
                  <a
                    href={CodeUrl.instaDeploy}
                    target={CodeUrl.blank}
                    className="m-2"
                  >
                    <Button
                      className="project-buttons"
                      type="button"
                      variant="success"
                    >
                      Deploy
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="container mt-2">
            {/* <--Shopify project details-->  */}
            <div class="card">
              <div class="face face1">
                <div class="content">
                  <img src={shopping} alt="" />
                  <h3>Shopify</h3>
                </div>
              </div>
              <div class="face face2">
                <div class="content">
                  <p>
                    In this project I have used
                    ReactJS,NodeJS,ExpressJS,Nodemailer and Mongodb
                  </p>
                  <a href={CodeUrl.shopifyFrontendGit} target={CodeUrl.blank}>
                    <Button
                      className="project-buttons"
                      type="button"
                      variant="success"
                    >
                      Frontend Source
                    </Button>
                  </a>

                  <a href={CodeUrl.shopifyBackendGit} target={CodeUrl.blank}>
                    <Button
                      className="project-buttons"
                      type="button"
                      variant="success"
                    >
                      Backend Source
                    </Button>
                  </a>
                  <a
                    href={CodeUrl.shopifyDeploy}
                    target={CodeUrl.blank}
                    className="m-2"
                  >
                    <Button
                      className="project-buttons"
                      type="button"
                      variant="success"
                    >
                      Deploy
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            {/* <--Netflix Clone project details-->  */}
            <div class="card">
              <div class="face face1">
                <div class="content">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                    alt=""
                  />
                  <h3>Netflix</h3>
                </div>
              </div>
              <div class="face face2">
                <div class="content">
                  <p>
                    In this project I have used ReactJS,NodeJS,ExpressJS,
                    Mongodb,Firebase,TMDB API,React youtube,Movie trailer
                  </p>
                  <a href={CodeUrl.netflixGit} target={CodeUrl.blank}>
                    <Button
                      className="project-buttons"
                      type="button"
                      variant="success"
                    >
                      Source
                    </Button>
                  </a>

                  <a
                    href={CodeUrl.netflixDeploy}
                    target={CodeUrl.blank}
                    className="m-2"
                  >
                    <Button
                      className="project-buttons"
                      type="button"
                      variant="success"
                    >
                      Deploy
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
