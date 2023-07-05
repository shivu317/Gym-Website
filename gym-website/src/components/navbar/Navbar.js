import React, { useState } from "react";
import styles from "./Navbar.module.css";
import GYM from "../assets/gym.png";
import DehazeIcon from "@mui/icons-material/Dehaze";
import CloseIcon from "@mui/icons-material/Close";
import Modals from "../login-sign/modal";

export default function Navbar() {
  const [click, setClick] = useState(true);
  const [activeNav, setActiveNav] = useState("");

  function handlenav() {
    setClick(!click);
  }

  return (
    <nav>
      <div className={styles.navbar}>
        <div className={styles.image}>
          <a href="/#">
            <img src={GYM} alt="GYM" />
          </a>
        </div>
        <ul className={styles.navbar_items}>
          <li className={activeNav === "#" ? styles.first_a : ""}>
            <a onClick={() => setActiveNav("#")} href="/#">
              Home
            </a>
          </li>
          <li className={activeNav === "#about" ? styles.first_a : ""}>
            <a onClick={() => setActiveNav("#about")} href="#about">
              About_Us
            </a>
          </li>
          <li className={activeNav === "#program" ? styles.first_a : ""}>
            <a onClick={() => setActiveNav("#program")} href="#program">
              Program
            </a>
          </li>
          <li className={activeNav === "#trainer" ? styles.first_a : ""}>
            <a onClick={() => setActiveNav("#trainer")} href="#trainer">
              Trainer
            </a>
          </li>
          <li className={activeNav === "#pricing" ? styles.first_a : ""}>
            <a onClick={() => setActiveNav("#pricing")} href="#pricing">
              Pricing
            </a>
          </li>
          <Modals />
        </ul>
        <div onClick={handlenav} className={styles.mobile}>
          {click ? (
            <DehazeIcon />
          ) : (
            <div className={styles.mobile_list}>
              <CloseIcon className={styles.closeicon} />
              <ul className={styles.mobile_list_anchor}>
                <li>
                  <a href="/#">Home</a>
                </li>
                <li>
                  <a href="#about">AboutUs</a>
                </li>
                <li>
                  <a href="#program">Program</a>
                </li>
                <li>
                  <a href="#trainer">Trainer</a>
                </li>
                <li>
                  <a href="#pricing">Pricing</a>
                </li>
                <Modals />
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}