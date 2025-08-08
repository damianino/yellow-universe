import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowContainer, SliderContainer } from "./styled";
import "./style.css";

type Props = {
  children: JSX.Element[];
  box?: boolean;
};

const Slider = ({ children, box }: Props) => {
  return (
    <SliderContainer box={box}>
      <Swiper
        className={"modalSwiper"}
        modules={[Navigation]}
        loop={true}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
        }}
        navigation={{
          nextEl: ".arrowRModal",
          prevEl: ".arrowLModal",
        }}
        style={{
          width: box ? "300px" : "500px",
        }}
      >
        {children.map((child, i) => (
          <SwiperSlide key={i}>{child}</SwiperSlide>
        ))}
      </Swiper>
      <ArrowContainer box={box}>
        <img
          style={{ cursor: "pointer" }}
          className="arrowLModal"
          src="arrow-l.png"
          width={76}
        />
        <img
          style={{ cursor: "pointer" }}
          className="arrowRModal"
          src="arrow-r.png"
          width={84}
        />
      </ArrowContainer>
    </SliderContainer>
  );
};

export default Slider;
