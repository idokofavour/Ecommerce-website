import styles from "./item.module.css";
export default function Item({ name, image, old_price, new_price }) {
  return (
    <div className={styles.item}>
      <img src={image} alt="" />
      <p>{name}</p>
      <div className={styles.itemPrices}>
        <div className={styles.itemNewPrice}>
            {new_price}
        </div>
        <div className={styles.itemOldPrice}>
            {old_price}
        </div>
      </div>
    </div>
  );
}
