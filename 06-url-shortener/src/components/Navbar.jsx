import { Logo } from "components/svg";
import styles from "styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
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
    </nav>
  );
};

export default Navbar;
