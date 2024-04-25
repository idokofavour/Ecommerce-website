import styles from "./productDisplay.module.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";

export default function ProductDisplay({ product }) {
  console.log(product);
  return (
    <div className={styles.productDisplay}>
      <div className={styles.productDisplayLeft}>
        <div className={styles.productDisplayImgList}>
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          {/* {console.log(product.image)} */}
        </div>
        <div className={styles.productDisplayImg}>
          <img
            className={styles.productDisplayMainImg}
            src={product.image}
            alt=""
          />
        </div>
      </div>
      <div className={styles.productDisplayRight}>
        <h1>{product.name}</h1>
        <div className={styles.productDisplayrightStar}>
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>{122}</p>
        </div>
      <div className={styles.productDisplayRightPrices}>
        <div className={styles.productDisplayRightPriceOld}>
          {product.old_price}
        </div>
        <div className={styles.productDisplayRightPriceNew}>
          {product.new_price}
        </div>
      </div>
      <div className={styles.productDisplayRightDescription}>
        A lightweight, usually knitted, pullover shirt, close-fitting and with a
        round neckline and short sleeves, worn as an undershirt or outer
        garment.
      </div>
      <div className={styles.productDisplayRightSize}>
        <h1>Select Size</h1>
        <div className={styles.productDisplayRightSize}>
          <div>S</div>
          <div>M</div>
          <div>L</div>
          <div>XL</div>
          <div>XXl</div>
        </div>
      </div>
      <button>ADD TO CART</button>
      <p>
        <span>Category :</span> Women, T-Shirt, Crop Top
      </p>
      <p>
        <span>Tags :</span> Modern, Latest
      </p>
      </div>
    </div>
  );
}
