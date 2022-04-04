/* import Image from 'next/image'; */
import { useSelector, useDispatch } from 'react-redux';
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from '../redux/cart.slice';
import styles from '../styles/Cart.module.css';

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };

  return (
    <div className={styles.container}>
      {cart.length === 0 ? (
        <h1 className={styles.title}>Your Cart is Empty!</h1>
      ) : (
        <>
          <div className={styles.header}>
            <div>Image</div>   
            <div>Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Actions</div>
            <div>Total Price</div>
           
          </div>
          {cart.map((item) => (
            <div className={styles.body}>
              <div className={styles.image}>
              <img src={item.image} height="90" width="65" />
              </div>
              <p className={styles.text}>{item.name}</p>
              <p className={styles.text}>$ {item.price}</p>
              <p className={styles.text}>{item.quantity}</p>
              <div className={styles.buttons}>
                <button onClick={() => dispatch(incrementQuantity(item.id))}>
                  +
                </button>
                <button onClick={() => dispatch(decrementQuantity(item.id))}>
                  -
                </button>
                <button onClick={() => dispatch(removeFromCart(item.id))}>
                  x
                </button>
              </div>
              <p className={styles.text}>$ {item.quantity * item.price}</p>
            </div>
          ))} 
          <div className={styles.freshipping}>{
            getTotalPrice() >= 10 && <h1>Congrats Free Shipping available</h1>
            }</div> 
          <h2 className={styles.title}> Total: <span className={styles.brand}>R$ {getTotalPrice()}</span> </h2>
        </>
      )}
    </div>
  );
};

export default CartPage;
