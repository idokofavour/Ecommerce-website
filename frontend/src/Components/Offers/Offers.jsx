import styles from './offers.module.css'
import exclusive_image from '../Assets/exclusive_image.png'
export default function Offers() {
  return (
    <div className={styles.offer}>
        <div className={styles.offerLeft}>
            <h1>Exclusive</h1>
            <h1>Offers for You</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>Check Now</button>
        </div>
        <div className={styles.offerRight}>
            <img src={exclusive_image} alt="" />
        </div>
    </div>
  )
}
