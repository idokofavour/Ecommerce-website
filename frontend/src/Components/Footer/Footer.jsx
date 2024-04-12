import styles from "./footer.module.css";
import footer_logo from "../Assets/logo_big.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pintester_icon from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerLogo}>
        <img src={footer_logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className={styles.footerLinks}>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className={styles.footerSocialsIcon}>
        <div className={styles.footerIconsContainer}>
          <img src={instagram_icon} alt="" />
        </div>
        <div className={styles.footerIconsContainer}>
          <img src={pintester_icon} alt="" />
        </div>
        <div className={styles.footerIconsContainer}>
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className={styles.footerCopyRight} >
        <hr />
        <p>Copyright @2024 -All Right Reserved.</p>
      </div>
    </div>
  );
}
