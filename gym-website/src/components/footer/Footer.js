import React from "react";
import styles from "./Footer.module.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
// import FacebookIcon from "@mui/icons-material/Facebook";
import Bablu from "../assets/shivani.jpg";

export default function Footer() {
  return (
    <div className={styles.main_footer}>
      <div className={styles.social}>
        <div className={styles.socil_text}>
          <h1>GYM</h1>
          <a href="www.linkedin.com/in/shivani-thoke-a9549a220" target="_LinkdIn">
            <LinkedInIcon />
          </a>
          <a href="https://github.com/shivu317" target="_GitHub">
            {" "}
            <GitHubIcon />
          </a>
          {/* <a href="https://www.facebook.com/Bablukmr01" target="_Facebook">
            {" "}
            <FacebookIcon />{" "}
          </a> */}
          <h5>
            Welcome to our gym! We are dedicated to helping you achieve your
            fitness.
          </h5>
        </div>

        <div className={styles.service_first}>
          <h1>Healthy living</h1>
          <h5>Regular exercise</h5>
          <h5>Proper nutrition</h5>
          <h5>Professional guidance</h5>
          <h5>Clean and safe environment</h5>
        </div>
      </div>

      <div className={styles.services}>
        <div className={styles.service_scond1}>
          <h1>Services</h1>
          <h5>Exercise equipment</h5>
          <h5>Personal training</h5>
          <h5>Childcare services</h5>
          <h5>Group fitness classes</h5>
        </div>
        <div className={styles.service_scond1}>
          <div className={styles.service_scond1}>
            <h1>Programs</h1>
            <h5>Wellness Programs</h5>
            <h5>Specialty Programs</h5>
            <h5>Functional Fitness</h5>
            <h5>Cardiovascular Training</h5>
          </div>
        </div>
      </div>
      <div style={{ marginLeft: "43vw" }}>
        <img style={{ borderRadius: "50%" }} src={Bablu} alt="IMG" width="45" />
        <p style={{ marginRight: ".5vw",color:'black' }}>@SHIVANI</p>
      </div>
    </div>
  );
}