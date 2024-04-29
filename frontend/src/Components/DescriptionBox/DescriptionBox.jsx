import styles from "./description.module.css";

export default function DescriptionBox() {
  return (
    <div className={styles.descriptionBox}>
      <div className={styles.navigator}>
        <div className={styles.navBox}>Description</div>
        <div className={styles.fade}>Reviews (122)</div>
      </div>
      <div className={styles.description}>
        <p>
          An e-commerce website is an online platform that facilitates buying
          and selling of products or services over the internet it servees as a
          vitual marketplace where businesses and individuals showcase their
          products interact with customers, and conducts transactions without
          the need of physical presence. E-commerce websites have gained
        </p>
        <p>
          E-commerce websites typically display products or services and
          detailed descriptions, images, prices, and any available variations
          (e.g., sizes, colors). Each product usually has its own dedicated page
          with relevant information.
        </p>
      </div>
    </div>
  );
}
