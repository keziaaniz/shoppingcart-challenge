import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cart.slice';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product }) => {
const dispatch = useDispatch(); 

  return (
    <div className={styles.card}>
      <img src={product.image} height={200} width={200}/>
      <h4 className={styles.title}>{product.productId}</h4>
      <p className={styles.price}>$ {product.price}</p>
      <button
        onClick={() => dispatch(addToCart(product))}
        className={styles.button}
      >
        Add to Cart
      </button>
    </div>
  );
};
export default ProductCard;