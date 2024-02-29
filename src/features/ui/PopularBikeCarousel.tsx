'use client'
import { FC, useMemo } from "react"
import { Bike } from '@/features'
import { IBike } from "@/shared/types"

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

interface PopularBikeCarouselProps {
    bikes: IBike[]
}

const PopularBikeCarousel: FC<PopularBikeCarouselProps> = ({ bikes }) => {
    const slides = useMemo(() => (
        bikes.map((bike) => (
        <SwiperSlide key={bike._id}>
            <Bike bike={bike} />
        </SwiperSlide>
        ))
    ), [bikes]);

    return (
        <Swiper 
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                960: { slidesPerView: 3 },
                1440: { slidesPerView: 4},
            }}
            pagination={{
                clickable: true
            }}
            modules={[Pagination]}
            className="popular-bike-slider mb-8"
        >{ slides }</Swiper>
    )
}   

export default PopularBikeCarousel
