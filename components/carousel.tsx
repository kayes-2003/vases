'use client';

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import Vases2 from "@/public/vases-02.jpg";
import Vases3 from "@/public/vases-03.jpg";
import Vases4 from "@/public/vases-04.jpg";
import Vases5 from "@/public/vases-05.jpg";
import Vases6 from "@/public/vases-06.jpg";
import Vases7 from "@/public/vases-07.jpg";
import Vases8 from "@/public/vases-08.jpg";
import Vases9 from "@/public/vases-09.jpg";

const Carousel = () => {
  return (
    <div className="sm:w-[45%] 2xl:w-[30%] w-[80%] mx-auto text-center mt-20">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        loop={true}
        autoplay={{
          delay: 2500, // changes every 2.5 seconds
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: true,
        }}
        navigation={true} // arrows enabled
        pagination={{
          clickable: true,
        }}
        modules={[EffectCoverflow, Navigation, Pagination]}
        className="w-[100%] h-full "
      >
       

        <SwiperSlide>
          <div className="bg-black/60 absolute w-full h-[30%] bottom-0" />
          <h1 className="absolute text-white font-bold sm:text-xl sm:bottom-10 bottom-2 left-2">
           Handmade Vases
          </h1>
          <h1 className="absolute text-white font-bold sm:text-xl sm:bottom-10 bottom-2 right-10">
           $28.99
          </h1>
          <Image
            src={Vases2}
            alt="vases2"
            className="block w-[100%] cursor-pointer"
          />
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-black/60 absolute w-full h-[30%] bottom-0" />
          <h1 className="absolute text-white font-bold sm:text-xl sm:bottom-10 bottom-2 left-2">
           Handmade Vases
          </h1>
          <h1 className="absolute text-white font-bold sm:text-xl sm:bottom-10 bottom-2 right-10">
           $32.99
          </h1>
          <Image
            src={Vases3}
            alt="vases3"
            className="block w-[100%] cursor-pointer"
          />
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-black/60 absolute w-full h-[30%] bottom-0" />
          <h1 className="absolute text-white font-bold sm:text-xl sm:bottom-10 bottom-2 left-2">
           Handmade Vases
          </h1>
          <h1 className="absolute text-white font-bold sm:text-xl sm:bottom-10 bottom-2 right-10">
           $29.00
          </h1>
          <Image
            src={Vases4}
            alt="vases4"
            className="block w-[100%] cursor-pointer"
          />
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-black/60 absolute w-full h-[30%] bottom-0" />
          <h1 className="absolute text-white font-bold sm:text-xl sm:bottom-10 bottom-2 left-2">
           Handmade Vases
          </h1>
          <h1 className="absolute text-white font-bold sm:text-xl sm:bottom-10 bottom-2 right-10">
           $13.90
          </h1>
          <Image
            src={Vases5}
            alt="vases5"
            className="block w-[100%] cursor-pointer"
          />
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-black/60 absolute w-full h-[30%] bottom-0" />
          <h1 className="absolute text-white font-bold sm:text-xl sm:bottom-10 bottom-2 left-2">
           Handmade Vases
          </h1>
          <h1 className="absolute text-white font-bold sm:text-xl sm:bottom-10 bottom-2 right-10">
           $18.00
          </h1>
          <Image
            src={Vases6}
            alt="vases6"
            className="block w-[100%] cursor-pointer"
          />
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-black/60 absolute w-full h-[30%] bottom-0" />
          <h1 className="absolute text-white font-bold sm:text-xl sm:bottom-10 bottom-2 left-2">
           Handmade Vases
          </h1>
          <h1 className="absolute text-white font-bold sm:text-xl sm:bottom-10 bottom-2 right-10">
           $12.99
          </h1>
          <Image
            src={Vases7}
            alt="vases7"
            className="block w-[100%] cursor-pointer"
          />
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-black/60 absolute w-full h-[30%] bottom-0" />
          <h1 className="absolute text-white font-bold sm:text-xl sm:bottom-10 bottom-2 left-2">
           Handmade Vases
          </h1>
          <h1 className="absolute text-white font-bold sm:text-xl sm:bottom-10 bottom-2 right-10">
           $23.99
          </h1>
          <Image
            src={Vases8}
            alt="vases8"
            className="block w-[100%] cursor-pointer"
          />
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-black/60 absolute w-full h-[30%] bottom-0" />
          <h1 className="absolute text-white font-bold sm:bottom-0 sm:font-[5px] md:font-[5px] bottom-2 left-2">
           Handmade Vases
          </h1>
          <h1 className="absolute text-white font-bold sm:text-[10px] sm:bottom-0 bottom-2 right-2">
           $25.00
          </h1>
          <Image
            src={Vases9}
            alt="vases9"
            className="block w-[100%] cursor-pointer"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;