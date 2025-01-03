import styles from './modules/CustomersSection.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import SwiperCard from './SwiperCard';


function CustomersSection() {
    return(
        <div id={styles.customersSection}>
            <div id={styles.custTitleContainer}>
                <h2>OUR HAPPY CUSTOMERS</h2>
            </div>
            <div id ={styles.swiperContainer}>
                <SwiperCard />
            </div>
        </div>
    )
}

export default CustomersSection