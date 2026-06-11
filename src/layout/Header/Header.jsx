import styles from "./Header.module.css";
const Header = () => {
  return (
    <header>
      <nav className={styles.navbar + " container"}>
        <div className={styles.logo}>
          <span className={styles.brand_mark}>IT</span>
          <span className={styles.text}>IT Services SA</span>
        </div>
        <ul className={styles.navLinks}>
          <li>
            <a href="#services" className={styles.link}>
              Services
            </a>
          </li>
          <li>
            <a href="#about" className={styles.link}>
              About
            </a>
          </li>
          <li>
            <a href="#contact" className={styles.link}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
