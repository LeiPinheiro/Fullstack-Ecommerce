import styles from './modules/Header.module.css'
// ICONS
import { IoCartOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";


function Header() {
    return(
    <>  
        <header>
            <div className={styles.topHeader}>
                <p>Sign up and get 20% off to your first order. <a href="#">Sign Up Now</a></p>
            </div>
            <div className={styles.bottomHeader}>
                <div className={styles.shopLogo}>
                    <a href="/"><img src="src/assets/SHOP.CO (1).png" alt="" /></a>
                </div>
                <ul>
                    <nav>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">On sale</a></li>
                        <li><a href="#">New Arrivals</a></li>
                        <li><a href="#">Brands</a></li>
                    </nav>
                </ul>
                <div className={styles.inputDiv}>
                    <input type="text" name="searchInput" id="searchInput" placeholder='Search for products...'/>
                </div>
                <div className={styles.rightIcons}>
                    <button id={styles.cartIcon}><a href="#"><IoCartOutline /></a></button>
                    <button><a href="#"><FaRegCircleUser /></a></button>
                </div>
            </div>
        </header>
    </>    
    )
}

export default Header