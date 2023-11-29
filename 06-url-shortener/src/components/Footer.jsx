import styles from "styles/Footer.module.css";
import {
  LogoWhite,
  IconFacebook,
  IconInstagram,
  IconTwitter,
  IconPinterest,
} from "components";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <LogoWhite />

      <div className={styles.main}>
        <div className={styles.links}>
          <div>
            <p>Features</p>
            <ul>
              <li>Link Shortening</li>
              <li>Branded Links</li>
              <li>Analytics</li>
            </ul>
          </div>

          <div>
            <p>Resources</p>
            <ul>
              <li>Blog</li>
              <li>Developers</li>
              <li>Support</li>
            </ul>
          </div>

          <div>
            <p>Company</p>
            <ul>
              <li>About</li>
              <li>Our Team</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        <div className={styles.media}>
          <IconFacebook />
          <IconTwitter />
          <IconPinterest />
          <IconInstagram />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
