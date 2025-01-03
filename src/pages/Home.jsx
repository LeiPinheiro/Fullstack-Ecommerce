import styles from '../components/modules/Home.module.css'

function Home () {
    return(
        <div id={styles.mainSection}>
            <div id={styles.homeContainer}>
                <div id={styles.leftContainer}>
                    <div id={styles.mainText}>
                        <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                        <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                        <div id={styles.mainBtn}>
                            <button><a href="#">Shop Now</a></button>
                        </div>
                    </div>
                    <div id={styles.bottomMainText}>
                        <div className={styles.bottomNumbers} id={styles.firstBottomDiv}>
                            <p className={styles.titleBottomText}>200+</p>
                            <p className={styles.pBottomText}>International Brands</p>
                        </div>
                        <div className={styles.bottomNumbers}>
                            <p className={styles.titleBottomText}>2,000+</p>
                            <p className={styles.pBottomText}>High-Quality Products</p>
                        </div>
                        <div className={styles.bottomNumbers}>
                            <p className={styles.titleBottomText}>30,000+</p>
                            <p className={styles.pBottomText}>Happy Customers</p>
                        </div>
                    </div>
                </div>
                <div id={styles.rightContainer}>
                    <img src="src/assets/modelsImage.png" alt="" />
                </div>
            </div>
            <div id={styles.brandsContainer}>
                <img src="src/assets/verseLogo.png" alt="" />
                <img src="src/assets/zara-logo-1 1.png" alt="" />
                <img src="src/assets/gucci-logo-1 1.png" alt="" />
                <img src="src/assets/prada-logo-1 1.png" alt="" />
                <img src="src/assets/calvinClainLogo.png" alt="" />
            </div>
        </div>
    )
}

export default Home