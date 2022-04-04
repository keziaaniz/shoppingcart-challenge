import styles from '../styles/Shop.module.css';
import ProductCard from '../components/ProductCard';
import { getProducts } from './api/products/index';
import { useSelector, useDispatch } from 'react-redux';
import {
    incrementQuantity,
    decrementQuantity,
    removeFromCart,
  } from '../redux/cart.slice';


const Shop = ({ product }) => {


    const cart = useSelector((state) => state.cart);
   const dispatch = useDispatch();
    const getTotalPrice = () => {
        return cart.reduce(
          (accumulator, item) => accumulator + item.quantity * item.price,
          0
        );
      };

    return (
        <div className={styles.shoppage}>
            <div className={styles.shop}>
        
                <h2 className={styles.title}>Shop <span className={styles.brand}>Time</span></h2>
          
                <div className={styles.listarea}>
                    <div className={styles.listcard}>
                
                        <div className={styles.cards}>
                        {product.items.map((product) => (
                            <ProductCard key={product.id} product={product} className={styles.produtc}/>
                            ))}
                        </div>
                        <h4 className={styles.title}> Total dos produtos: <span className={styles.brand}> R$15,55</span></h4>
                    </div>
            
                </div>
            </div>
            <div className={styles.shopnow}>
                <div className={styles.mycart}>
                    <h3 className={styles.shoptext}>My <span className={styles.brand}>Cart</span></h3>
                    
                    {cart.map((item) => (
                        <div className={styles.body}>
                          <div className={styles.image}>
                          <img src={item.image} height={80} width={80}/>
                          </div>
                          <div className={styles.textproduct}>
                          <p className={styles.texttitle}>{item.name}</p>
                          <p className={styles.text}>$ {item.price}</p>
                          
                          <p className={styles.text}>$ {item.quantity * item.price}</p>
                          </div>
                        </div>
                      ))}
                      <div className={styles.freshipping}>{
                        getTotalPrice() >= 10 && <h1>Congrats Free Shipping available</h1>
                        }</div> 
                    <div className={styles.shoptitle}> Total: <span className={styles.brand}>R$ {getTotalPrice()}</span></div>
                </div>
            </div>
        </div>
    
    );
};

export default Shop;

export async function getStaticProps() {
    const product = await getProducts();
    return { props: { product } };

}