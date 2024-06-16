import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <Link to="/" className={styles.navbarLogo}>
          ST System
        </Link>
        <div className={styles.burger} onClick={handleToggle}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
        <ul
          className={
            isOpen ? `${styles.navMenu} ${styles.active}` : styles.navMenu
          }
        >
          <li className={styles.navItem}>
            <Link to="/" className={styles.navLinks}>
              Spaceships
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/crew-members" className={styles.navLinks}>
              Crew Members
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/missions" className={styles.navLinks}>
              Missions
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
