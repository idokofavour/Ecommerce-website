import styles from "./newsletter.module.css";
export default function Newsletter() {
  return (
    <div className={styles.newsletter}>
      <h1>Get Exclusive Offers on Your Email</h1>
      <p>Subscribe to our newletter and stay updated</p>
      <div>
        <input type="email" placeholder="Your Email id" />
        <button>Subscribe</button>
      </div>
    </div>
  );
}
