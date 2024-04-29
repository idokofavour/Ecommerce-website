import { useContext } from "react";
import styles from "./cartItems.module.css";
import { ShopContext } from "../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";
export default function CartItems() {
  const { all_product, cartItems, removeFromCart } = useContext(ShopContext);
  return (
    <div className={styles.cartItems}>
      <div className={styles.formatMain}>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <>
              <div className={styles.format}>
                <img src={e.image} alt="" className={styles.productIcon} />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className={styles.quantity}>{cartItems[e.id]}</button>
                <p>{e.new_price *cartItems[e.id]}</p>
                <img
                  src={remove_icon}
                  onClick={() => removeFromCart(e.id)}
                  alt=""
                />
              </div>
              <hr />
            </>
          );
        }
      })}
    </div>
  );
}
