import { Logo } from "components/svg";
import styles from "styles/Navbar.module.css";
import { useState } from "react";

const Navbar = () => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      {/* Desktop navbar */}
      <div className={styles.navHead}>
        <Logo />
        <ul className={styles.navItems}>
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>
      </div>
      <div className={styles.navTail}>
        <button className={styles.buttonLogIn}>Login</button>
        <button className={styles.buttonSignUp}>Sign Up</button>
      </div>

      {/* Burger menu icon */}
      <div
        className={styles.burger}
        onClick={() => {
          setMobileMenuIsOpen(!mobileMenuIsOpen);
        }}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Mobile navbar */}
      <div
        className={styles.mobileNavbar}
        style={mobileMenuIsOpen ? {} : { display: "none" }}
      >
        <ul className={styles.mobileNavItems}>
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>
        <div className={styles.mobileNavSeparator}></div>
        <div className={styles.mobileNavButtons}>
          <button className={styles.buttonLogIn}>Login</button>
          <button className={styles.buttonSignUp}>Sign Up</button>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={styles.overlay}
        style={mobileMenuIsOpen ? {} : { display: "none" }}
        onClick={() => {
          setMobileMenuIsOpen(!mobileMenuIsOpen);
        }}
      ></div>
    </nav>
  );
};

export default Navbar;
