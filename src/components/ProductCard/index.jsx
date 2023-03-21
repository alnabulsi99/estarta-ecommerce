import styles from './styles.module.css';
import { useDispatch } from 'react-redux';
import { addToCart } from './../../redux/cart/actions'

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className={styles.card} key={product?.id}>
      <img src={product?.image_link} />
      <p>{product?.name}</p>
      <p>{product?.price}$</p>
    
      <div className={styles.rating}>
        {new Array(product?.rating).fill("⭐").map((star, index) => (
          <span key={index} className={styles.star}>{star}</span>
        ))}
      </div>
      <button onClick={handleAddToCart}>Add To Cart</button>
    </div>
  );
}
