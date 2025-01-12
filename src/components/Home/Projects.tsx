"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import Image from "next/image";
import MainTitle from "../sharable/MainTitle";

const Projects = () => {
  let projects: { title: string; image: string }[] = [
    {
      title: "Project 1",
      image: "https://glassteceg.com/wp-content/uploads/2024/06/2-5.jpg",
    },
    {
      title: "Project 2",
      image: "https://glassteceg.com/wp-content/uploads/2024/06/2.png",
    },
    {
      title: "Project 3",
      image: "https://glassteceg.com/wp-content/uploads/2024/06/2-1-1.jpg",
    },
    {
      title: "Project 4",
      image: "https://glassteceg.com/wp-content/uploads/2024/06/1-1-3.jpg",
    },
  ];
  return (
    <section className="container ">
      <MainTitle title={"Some Of Our Projects"} />
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={800}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        initialSlide={1}
        breakpoints={{
          0: {
            slidesPerView: 1.4,
          },
          768: {
            slidesPerView: 2.3,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Autoplay]}
        className="!w-full h-full swiper4 !py-[10px]">
        {projects.map((project) => (
          <SwiperSlide className="relative " key={project.title}>
            <img
              alt={project.title}
              className="border-2 rounded-lg border-border overflow-hidden"
              src={project.image}
            />
            <div className="absolute bottom-0  text-center    bg-background/50 w-full">
              <h2 className="py-4 text-lg font-bold">{project.title}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Projects;
