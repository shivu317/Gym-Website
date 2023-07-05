import React from 'react'
import styles from './Home.module.css'
import IMG from '../assets/gyms.png';
import Modals from '../login-sign/modal';
// import Modules from '../login-sign/modal'

export default function Home() {
  return (
    <section id="#" className={styles.home_section}>
      <div className={styles.home_section_one}>
        <div className={styles.home_content}>
         <h1> "Workout… Because it’s another day to become better!"  </h1>
         <button>
           Welcome..
          </button>
          <Modals/>
          {/* <Modules/> */}
        </div>
        <div className={styles.home_image}>
          <img src={IMG} alt='HOME'/>
        </div>
      </div>

    </section>
  )
}