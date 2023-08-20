import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../Styles/Footer.css";

function Footer() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();

  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="mailto:sahilbhowmick1@gmail.com"><EmailIcon /></a>
        
        <a href="https://github.com/Sahil-Bhowmick">
          <GitHubIcon />
        </a>
        <a href="https://www.linkedin.com/in/sahil-bhowmick">
          <LinkedInIcon />
        </a>
        <a href="https://www.facebook.com/sahil.bhowmick.3?mibextid=ZbWKwL">
          <FacebookIcon />
        </a>
        <a href="https://instagram.com/sahil_bhowmick_1?igshid=NzMyMjgxZWIzNw==">
          <InstagramIcon />
        </a>
      </div>
      <p> &copy; {year} Sahil Bhowmick</p>
    </div>
  );
}

export default Footer;
