"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { bannersFunc } from "@/store/HomeSlices/bannersSlice";
import { BannerType } from "@/Types/types";
import CheckLang from "../sharable/CheckLang";
import { usePathname } from "next/navigation";
const Hero = () => {
  let [swiper, setSwiper] = useState<SwiperCore | null>(null);
  let [currentIndex, setCurrentIndex] = useState<number>(0);
  const { data, isLoading } = useSelector(
    (state: RootState) =>
      state.banners as { data: BannerType[]; isLoading: boolean }
  );
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(bannersFunc());
  }, []);
  return (
    <section className="mt-[96px] h-[600px] lg:h-[86.7vh] flex flex-col  ">
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={800}
        className="mySwiper relative"
        modules={[Autoplay]}
        slidesPerView={1}
        onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
        onSwiper={(swiper) => setSwiper(swiper)}>
        {isLoading && (
          <SwiperSlide>
            <div className="size-full relative">
              <div className="w-full h-full bg-accent animate-pulse" />
            </div>
            <div className="absolute top-[40%] -translate-y-1/2 w-full start-[40px]  ">
              <h2 className="bg-black/20 animate-pulse h-8 w-48 mb-3 " />
              <p className="bg-black/20 animate-pulse h-6 w-72  " />
            </div>
          </SwiperSlide>
        )}
        {data.map((item) => (
          <SwiperSlide key={item._id}>
            <div className="size-full relative">
              <Image
                className="brightness-[0.3] aspect-square "
                src={item?.image}
                fill
                alt={item?.name?.en || "Banner image"}
                priority={true}
                loading="eager"
              />
            </div>
            <div className="absolute top-[40%] -translate-y-1/2 w-full text-center md:text-start md:ms-20">
              <motion.h2
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-white text-2xl md:text-4xl font-semibold capitalize mb-1 md:mb-3 md:max-w-2xl leading-relaxed">
                <CheckLang item={item.name} />
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-lg md:text-2xl text-gray-300 mx-3 md:mx-0 md:max-w-2xl leading-relaxed">
                <CheckLang item={item.name} />
              </motion.p>
            </div>
          </SwiperSlide>
        ))}
        <div className=" absolute bottom-20 sm:bottom-10 md:start-[-20px] lg:start-[-40px] z-10 w-full">
          <div className="flex items-center  justify-center md:justify-end gap-4">
            {data.slice(0, 4).map((item, i) => (
              <div
                onClick={() => {
                  swiper?.slideTo(i);
                  setCurrentIndex(i);
                }}
                className="size-[60px] sm:size-[120px] md:size-[150px] cursor-pointer relative"
                key={i}>
                <Image
                  className={`rounded-lg duration-300 ${
                    currentIndex === i
                      ? "grayscale-0 border-primary border-2 -translate-y-2"
                      : "grayscale-[100%]"
                  }`}
                  fill
                  src={item?.image}
                  alt={item?.image}
                />
              </div>
            ))}
          </div>
        </div>
      </Swiper>
    </section>
  );
};

export default Hero;
