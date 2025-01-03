import styles from './modules/Footer.module.css'

function Footer() {
    return(
        <footer>
            <div className={styles.footerCard} id={styles.firstCardFooter}>
                <img src="src/assets/SHOP.CO (1).png" alt="" />
                <p>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
            </div>
            <div className={styles.footerCard}>
                <p className={styles.footerTitle}>COMPANY</p>
                <p className={styles.footerNav}>About</p>
                <p className={styles.footerNav}>Features</p>
                <p className={styles.footerNav}>Works</p>
                <p className={styles.footerNav}>Career</p>
            </div>
            <div className={styles.footerCard}>
                <p className={styles.footerTitle}>HELP</p>
                <p className={styles.footerNav}>Customer Support</p>
                <p className={styles.footerNav}>Delivery Details</p>
                <p className={styles.footerNav}>Terms & Conditions</p>
                <p className={styles.footerNav}>Privacy Policy</p>
            </div>
            <div className={styles.footerCard}>
                <p className={styles.footerTitle}>FAQ</p>
                <p className={styles.footerNav}>Account</p>
                <p className={styles.footerNav}>Manage Deliveries</p>
                <p className={styles.footerNav}>Orders</p>
                <p className={styles.footerNav}>Payments</p>
            </div>
            <div className={styles.footerCard}>
                <p className={styles.footerTitle}>RESOURCES</p>
                <p className={styles.footerNav}>Free eBooks</p>
                <p className={styles.footerNav}>Development Tutorial</p>
                <p className={styles.footerNav}>How to - blog</p>
                <p className={styles.footerNav}>Youtube Playlist</p>
            </div>
        </footer>
    )
}

export default Footer