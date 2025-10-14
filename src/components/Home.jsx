import React from "react";
import MainLayout from "./MainLayout";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Home = () => {
  return (
    <MainLayout>
      <div>
        <header>
          <Swiper
            pagination={true}
            navigation={true}
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            // onSlideChange={() => console.log("slide change")}
            // onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <img src="/images/p1.jpg" />
            </SwiperSlide>

            <SwiperSlide>
              <img src="/images/p2.jpg" />
            </SwiperSlide>

            <SwiperSlide>
              <img src="/images/p3.jpg" />
            </SwiperSlide>

            <SwiperSlide>
              <img src="/images/p4.jpg" />
            </SwiperSlide>

            <SwiperSlide>
              <img src="/images/p5.jpg" />
            </SwiperSlide>
          </Swiper>
        </header>
      </div>
    </MainLayout>
  );
};

export default Home;
