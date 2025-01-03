import styles from './modules/NewArrivalsSec.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios'


const api = axios.create({
    baseURL: 'https://fakestoreapi.com/products' 
})

function NewArrivalsSec() {
    const [clotheImage, setClotheImage] = useState([])
    
    useEffect(() =>{
        api.get("/category/men's clothing").then((response) => {
            setClotheImage(response.data)
        }).catch((error) => {
            console.log("Ocorreu um erro", error)
        })
    }, [])
    
    
    return(
        <div className={styles.newArrivalsSection}>
            <div className={styles.newArrivalsTitle}>
                <h2>NEW ARRIVALS</h2>
            </div>
            <div className={styles.clotheSection}>
                {clotheImage.slice(0, 4).map(clothe => (
                    <div className={styles.clotheContainer} key={clothe.id}>    
                        <img src={clothe.image} alt="" />
                        <div className={styles.clotheCardText}>
                            <p className={styles.clotheName}>{clothe.title}</p>
                            <p className={styles.clothePrice}>${clothe.price}</p>
                            
                        </div>
                        <div className={styles.clotheBtnContainer}>
                            <button className={styles.addCartBtn}><a href="#">Add to Cart</a></button>
                        </div>
                    </div>
                ))}
            </div>
            <button className={styles.viewAllBtn}><a href="#">View All</a></button>
            <hr />
        </div>
    )
}

export default NewArrivalsSec