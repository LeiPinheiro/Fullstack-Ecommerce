import styles from './modules/CustomersSection.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaCheckCircle } from "react-icons/fa";


import 'swiper/css';

import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/autoplay'

function SwiperCard() {
    return(
    <>
        <Swiper spaceBetween={330} slidesPerView={3.5} loop={true}>
            <SwiperSlide>
                <div className={styles.swiperCard}>
                    <div className={styles.rateImageContainer}>
                        <img src="src/assets/rateStars.png" alt="" />
                    </div>
                    <div className={styles.cardTitleContainer}>
                        <p>Sarah M.</p>
                        <FaCheckCircle className={styles.custIcon}/>
                    </div>
                    <div className={styles.cardTextContainer}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptatum magnam, iure veniam dignissimos voluptate dicta necessitatibus expedita vero non accusantium! Aspernatur ipsum, atque officia tempore libero pariatur fugiat eligendi.</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={styles.swiperCard}>
                    <div className={styles.rateImageContainer}>
                        <img src="src/assets/rateStars.png" alt="" />
                    </div>
                    <div className={styles.cardTitleContainer}>
                        <p>Alex K.</p>
                        <FaCheckCircle className={styles.custIcon}/>
                    </div>
                    <div className={styles.cardTextContainer}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptatum magnam, iure veniam dignissimos voluptate dicta necessitatibus expedita vero non accusantium! Aspernatur ipsum, atque officia tempore libero pariatur fugiat eligendi.</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={styles.swiperCard}>
                    <div className={styles.rateImageContainer}>
                        <img src="src/assets/rateStars.png" alt="" />
                    </div>
                    <div className={styles.cardTitleContainer}>
                        <p>James L.</p>
                        <FaCheckCircle className={styles.custIcon}/>
                    </div>
                    <div className={styles.cardTextContainer}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptatum magnam, iure veniam dignissimos voluptate dicta necessitatibus expedita vero non accusantium! Aspernatur ipsum, atque officia tempore libero pariatur fugiat eligendi.</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={styles.swiperCard}>
                    <div className={styles.rateImageContainer}>
                        <img src="src/assets/rateStars.png" alt="" />
                    </div>
                    <div className={styles.cardTitleContainer}>
                        <p>Matthew P.</p>
                        <FaCheckCircle className={styles.custIcon}/>
                    </div>
                    <div className={styles.cardTextContainer}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptatum magnam, iure veniam dignissimos voluptate dicta necessitatibus expedita vero non accusantium! Aspernatur ipsum, atque officia tempore libero pariatur fugiat eligendi.</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={styles.swiperCard}>
                    <div className={styles.rateImageContainer}>
                        <img src="src/assets/rateStars.png" alt="" />
                    </div>
                    <div className={styles.cardTitleContainer}>
                        <p>Noah M.</p>
                        <FaCheckCircle className={styles.custIcon}/>
                    </div>
                    <div className={styles.cardTextContainer}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptatum magnam, iure veniam dignissimos voluptate dicta necessitatibus expedita vero non accusantium! Aspernatur ipsum, atque officia tempore libero pariatur fugiat eligendi.</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={styles.swiperCard}>
                    <div className={styles.rateImageContainer}>
                        <img src="src/assets/rateStars.png" alt="" />
                    </div>
                    <div className={styles.cardTitleContainer}>
                        <p>Jeff J.</p>
                        <FaCheckCircle  className={styles.custIcon}/>
                    </div>
                    <div className={styles.cardTextContainer}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptatum magnam, iure veniam dignissimos voluptate dicta necessitatibus expedita vero non accusantium! Aspernatur ipsum, atque officia tempore libero pariatur fugiat eligendi.</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={styles.swiperCard}>
                    <div className={styles.rateImageContainer}>
                        <img src="src/assets/rateStars.png" alt="" />
                    </div>
                    <div className={styles.cardTitleContainer}>
                        <p>Sofia M.</p>
                        <FaCheckCircle className={styles.custIcon}/>
                    </div>
                    <div className={styles.cardTextContainer}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptatum magnam, iure veniam dignissimos voluptate dicta necessitatibus expedita vero non accusantium! Aspernatur ipsum, atque officia tempore libero pariatur fugiat eligendi.</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={styles.swiperCard}>
                    <div className={styles.rateImageContainer}>
                        <img src="src/assets/rateStars.png" alt="" />
                    </div>
                    <div className={styles.cardTitleContainer}>
                        <p>Carl A.</p>
                        <FaCheckCircle className={styles.custIcon}/>
                    </div>
                    <div className={styles.cardTextContainer}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptatum magnam, iure veniam dignissimos voluptate dicta necessitatibus expedita vero non accusantium! Aspernatur ipsum, atque officia tempore libero pariatur fugiat eligendi.</p>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </>        
    )
}

export default SwiperCard