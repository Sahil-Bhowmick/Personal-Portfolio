import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../Styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Sahil Bhowmick</h2>

        <div className="prompt">
          <p>
            I'm a very ambitious <b>Front-End Developer</b> looking for a role
            in an established IT company with the opportunity to work with the
            latest technologies on challenging and diverse projects.
          </p>
          {/* <p>
            I'm quiet confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p>
            If I need to define myself in one sentence that would be a sports
            fanatic, and tech-obsessed!!!
          </p> */}
          <a href="mailto:sahilbhowmick1@gmail.com">
            <EmailIcon />
          </a>

          <a href="https://github.com/Sahil-Bhowmick">
            <GitHubIcon />
          </a>
          <a href="https://www.linkedin.com/in/sahil-bhowmick">
            <LinkedInIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>
              HTML, CSS, JavaScript, ReactJS, React-Bootstrap, TypeScript,
              TailwindCSS, Git, Vite, MaterialUI{" "}
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
