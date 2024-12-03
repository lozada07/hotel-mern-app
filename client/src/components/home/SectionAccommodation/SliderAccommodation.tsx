import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import '../../../app.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const SliderAccommodation = ({ images, row, isFilter }: { images?: string[], row: boolean, isFilter?: boolean }) => {
    return (
        <>
            <Swiper
                style={{ "--swiper-navigation-color": "#000", "--swiper-navigation-size": "16px", "--swiper-navigation-background": "#fff", } as React.CSSProperties}
                cssMode={true}
                navigation={true}
                pagination={true}
                modules={[Navigation, Pagination,]}
                className={`${row ? isFilter ? "lg:w-1/2" : "lg:w-full " : ""}   w-full `}
            >
                {images?.map((img: any) => (
                    <SwiperSlide key={img} >

                        <LazyLoadImage key={img} src={img} alt="" className={`sm:h-64  md:h-[250px] w-[1000px]`}
                            effect="blur"

                        />
                    </SwiperSlide>
                ))}

            </Swiper >

        </>
    );
}

export default SliderAccommodation
