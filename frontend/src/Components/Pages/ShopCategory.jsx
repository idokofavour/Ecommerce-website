import { useContext } from "react";
// import all_product from '../Assets/all_product'
import styles from "./css/shopCategory.module.css";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Assets/dropdown_icon.png";
import Item from "../Item/Item";

export default function ShopCategory(props) {
  const { all_product } = useContext(ShopContext);
  return (
    <div className={styles.shopcatgory}>
      <img className={styles.shopcategoryBanner} src={props.banner} alt="" />
      <div className={styles.shopcategoryIndexSort}>
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className={styles.shopcategorySort}>
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className={styles.shopcategoryProducts}>
        {all_product.map((item, i) => {
        console.log(item.category);

        // Error message category is not defined
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
                />
              );
            } else {
              return null;
            }
        })}
      </div>
    </div>
  );
}
