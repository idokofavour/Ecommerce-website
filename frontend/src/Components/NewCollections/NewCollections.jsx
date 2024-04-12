import styles from "./newCollections.module.css";
import new_collection from "../Assets/new_collections";
import Item from "../Item/Item";
export default function NewCollections() {
  return (
    <div className={styles.newCollections}>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className={styles.collections}>
        {new_collection.map((item, i) => {
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
        })}
      </div>
    </div>
  );
}
