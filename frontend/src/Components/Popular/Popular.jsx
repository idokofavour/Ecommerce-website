import styles from "./popular.module.css";
import product_data from '../Assets/data'
import Item from "../Item/Item";
export default function Popular() {
  return <div className={styles.popular}>
    <h1>POPULAR IN WOMEN</h1>
    <hr />
    <div className={styles.popularItem}>
      {product_data.map((item, i)=>{
       return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
      })}ll
    </div>
  </div>
}
