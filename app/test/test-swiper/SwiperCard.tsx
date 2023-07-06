// import Swiper core and required modules
import { Pagination } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import { Button } from '@mui/material'

const App =  () => {
    return (
        <Swiper
            modules={[Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>
                <Button variant='outlined' fullWidth>
                    Slide 1
                </Button>
                <Button variant='outlined' fullWidth>
                    Slide 1
                </Button>
            </SwiperSlide>
            <SwiperSlide>
                <Button variant='outlined' fullWidth>
                    Slide 2
                </Button>
                <Button variant='outlined' fullWidth>
                    Slide 2
                </Button>
            </SwiperSlide>
        </Swiper>
    )
}

export default App
