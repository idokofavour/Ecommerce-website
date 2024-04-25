import styles from "./breadcrum.module.css";
import arrow_icon from "../Assets/breadcrum_arrow.png";

export default function Breadcrum({ product }) {
  // const { product } = props
  return (
    <div className={styles.breadcrum}>
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" />{" "}
      {product.category} <img src={arrow_icon} alt="" /> {product.name}
      {console.log(product.category)}
    </div>
  );
}
