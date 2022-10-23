import classNames from 'classnames/bind'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'

import styles from './Slideshow.module.scss'

const cx = classNames.bind(styles)

function Slideshow() {
    return (
        <div className={cx('slideshow')}>
            <Swiper
                spaceBetween={10}
                centeredSlides={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination]}
            >
                <SwiperSlide className={cx('slide')}>
                    <img src="./assets/images/slide1.jpg" />
                </SwiperSlide>
                <SwiperSlide className={cx('slide')}>
                    <img src="./assets/images/slide2.jpg" />
                </SwiperSlide>
                <SwiperSlide className={cx('slide')}>
                    <img src="./assets/images/slide3.jpg" />
                </SwiperSlide>
                <SwiperSlide className={cx('slide')}>
                    <img src="./assets/images/slide4.jpg" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Slideshow
