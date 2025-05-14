// src/components/Footer.js
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.copyrightFooter}>
      <p>&copy; coderismail {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;