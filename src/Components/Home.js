import React from "react";

function Home() {
  return (
    // <--Home page details-->
    <div className="d-flex justify-content-center " id="home">
      <div className="caption-header">
        <div className="home-hd">Welcome!</div>
        <h2>
          I'm <span className="name-hd">Vishnu</span>priya S
        </h2>
        <h4 className="stack-hd">Full stack developer</h4>
        <a
          href="https://drive.google.com/file/d/1zb3PJzMnS7LPqituHc9nb4Lb_sWnLhsg/view?usp=drive_link"
          target="_blank"
          rel=" noopener noreferrer"
        >
          <button className="download-button">Download CV</button>
        </a>
      </div>
    </div>
  );
}

export default Home;
