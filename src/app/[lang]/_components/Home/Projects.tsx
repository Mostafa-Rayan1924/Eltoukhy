"use client";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import MainTitle from "../sharable/MainTitle";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { useEffect } from "react";
import { ProjectFunc } from "@/store/HomeSlices/projectSlice";
import { ProjectType } from "@/Types/types";
import Link from "next/link";
import CheckLang from "../sharable/CheckLang";
import { usePathname } from "next/navigation";

const Projects = ({ Home }: { Home: { projectSec: { title: string } } }) => {
  let pathName = usePathname().split("/")[1];
  const { data, isLoading } = useSelector(
    (state: RootState) =>
      state.projects as { data: ProjectType[]; isLoading: boolean }
  );
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(ProjectFunc());
  }, []);
  return (
    <section className="container ">
      <MainTitle title={Home?.projectSec?.title} />
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
        {data?.map((project, i) => (
          <SwiperSlide className="relative " key={i}>
            <Link href={`/${pathName}/projects/${project?._id}`}>
              <img
                alt={project?.title?.en}
                className="border-2 rounded-lg border-border h-[400px] overflow-hidden"
                src={project?.image}
              />
              <div className="absolute bottom-0  text-center    bg-background/50 w-full">
                <h2 className="py-4 text-lg font-bold">
                  <CheckLang item={project?.title} />
                </h2>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      {isLoading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="w-full rounded-lg h-[400px] bg-accent animate-pulse"
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Projects;
