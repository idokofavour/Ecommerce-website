import styles from "./item.module.css";
import { Link } from "react-router-dom";

export default function Item({ id, name, image, old_price, new_price }) {
  return (
    <div className={styles.item}>
      <Link to={`/product/${id}`}>
        <img onClick={window.scrollTo(0, 0)} src={image} alt="" />
      </Link>
      <p>{name}</p>
      <div className={styles.itemPrices}>
        <div className={styles.itemNewPrice}>{new_price}</div>
        <div className={styles.itemOldPrice}>{old_price}</div>
        
      </div>
    </div>
  );
}
