"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
export let slides: {
  id: number;
  title: string;
  description: string;
  image: string;
}[] = [
  {
    id: 1,
    title: "Welcome to Our Glass Company",
    description:
      "We offer a wide range of high-quality glass solutions for architectural designs and modern buildings.",
    image:
      "https://plus.unsplash.com/premium_photo-1661880095551-b900dbf2308d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2xhc3MlMjBjb21wYW55fGVufDB8fDB8fHww", // Architectural glass
  },
  {
    id: 2,
    title: "High-Quality Glass Manufacturing",
    description:
      "We utilize advanced technologies to produce durable and safe glass for residential and commercial purposes.",
    image:
      "https://images.unsplash.com/photo-1470075801209-17f9ec0cada6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z2xhc3MlMjBjb21wYW55fGVufDB8fDB8fHww", // Glass manufacturing
  },
  {
    id: 3,
    title: "Innovative Glass Designs",
    description:
      "Custom glass designs to suit all tastes, from doors and windows to premium interior decorations.",
    image:
      "https://images.unsplash.com/photo-1489465033131-30f7e2025f68?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2xhc3MlMjBjb21wYW55fGVufDB8fDB8fHww", // Interior glass design
  },
  {
    id: 4,
    title: "Durability and Sustainability with High-Performance Glass",
    description:
      "Impact-resistant glass that provides sound and heat insulation, focusing on sustainability and environmental care.",
    image:
      "https://plus.unsplash.com/premium_photo-1661880095551-b900dbf2308d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2xhc3MlMjBjb21wYW55fGVufDB8fDB8fHww",
  },
];
const Hero = () => {
  let [swiper, setSwiper] = useState<SwiperCore | null>(null);
  let [currentIndex, setCurrentIndex] = useState<number>(0);

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
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="size-full relative">
              <Image
                className="brightness-[0.3] aspect-square "
                src={slide.image}
                fill
                alt={slide.title}
              />
            </div>
            <div className="absolute top-[40%]  -translate-y-1/2 w-full  text-center md:text-start  md:ms-20">
              <motion.h2
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-white text-2xl md:text-4xl font-semibold capitalize mb-1 md:mb-3 md:max-w-2xl leading-relaxed">
                {slide.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-lg md:text-2xl text-gray-300 mx-3 md:mx-0  md:max-w-2xl leading-relaxed">
                {slide.description}
              </motion.p>
            </div>
          </SwiperSlide>
        ))}
        <div className=" absolute bottom-14 sm:bottom-10 md:right-5 lg:right-10 z-10 w-full">
          <div className="flex items-center  justify-center md:justify-end gap-4">
            {slides.slice(0, 4).map((slide, i) => (
              <div
                onClick={() => {
                  swiper?.slideTo(i);
                }}
                className="size-[60px] sm:size-[120px] md:size-[170px] cursor-pointer relative"
                key={slide.id}>
                <Image
                  className={`rounded-lg duration-300  ${
                    currentIndex === i
                      ? "grayscale-0 border-primary  border-2 -translate-y-2"
                      : "grayscale-[100%]"
                  }`}
                  fill
                  src={slide.image}
                  alt={slide.title}
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
