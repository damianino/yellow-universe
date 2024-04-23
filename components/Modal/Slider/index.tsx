import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import {ArrowContainer, SliderContainer} from "./styled";
import "./style.css"

type Props = {
    children: JSX.Element[]
}

const Slider = ({children}: Props) => {


    return (
        <SliderContainer>
        <Swiper
            className={"modalSwiper"}
            modules={[Navigation]}
            loop={true}
            slidesPerView={1}
            autoplay={{
                delay: 3000
            }}
            navigation={{
                nextEl: '.arrowRModal',
                prevEl: '.arrowLModal',
            }}
            style={{
                width: "500px",
            }}
        >
            {children.map((child) => (
                <SwiperSlide>
                    {child}
                </SwiperSlide>
            ))}
        </Swiper>
        <ArrowContainer>
            <img style={{cursor: "pointer"}} className="arrowLModal" src="arrow-l.png" width={76}/>
            <img style={{cursor: "pointer"}} className="arrowRModal" src="arrow-r.png" width={84}/>
        </ArrowContainer>
    </SliderContainer>)
}

export default Slider