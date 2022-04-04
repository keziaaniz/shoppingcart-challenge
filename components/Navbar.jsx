import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
import React from 'react';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const cart = useSelector((state) => state.cart);

  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };


    return (

        <nav className={styles.navbar}>
            <h2 className={styles.logo}>Truffles Only</h2>
            <ul className={styles.links}>
                <li className={styles.navlink}>
                    <Link href='/'>Home</Link>
                </li>
                <li className={styles.navlink}>
                    <Link href='/Shop'>Shop</Link>
                </li>
                <li className={styles.navlink}>
                <Link href="/Cart">
                <p className={styles.text}>Cart ({getItemsCount()})</p>
              </Link>
                </li>
            </ul>
        </nav>

        );
};

export default Navbar;