import styles from '../styles/Home.module.css';


const Home = () => {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2 className={styles.text}>The <span className={styles.brand}>more</span> <br/> the <span className={styles.brand}>Merrier</span></h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
