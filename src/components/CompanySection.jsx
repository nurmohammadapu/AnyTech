import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import logo1 from '../assets/icons/diagram-lines/1.webp';
import logo2 from '../assets/icons/diagram-lines/2.webp';
import logo3 from '../assets/icons/diagram-lines/3.webp';
import logo4 from '../assets/icons/diagram-lines/4.webp';
import logo5 from '../assets/icons/diagram-lines/5.webp';
import logo6 from '../assets/icons/diagram-lines/6.webp';
import logo7 from '../assets/icons/diagram-lines/7.webp';
import logo8 from '../assets/icons/diagram-lines/17.webp';
import logo9 from '../assets/icons/diagram-lines/8.webp';
import logo10 from '../assets/icons/diagram-lines/9.webp';
import logo11 from '../assets/icons/diagram-lines/10.webp';
import logo12 from '../assets/icons/diagram-lines/11.webp';
import logo13 from '../assets/icons/diagram-lines/12.webp';
import logo14 from '../assets/icons/diagram-lines/13.webp';
import logo15 from '../assets/icons/diagram-lines/14.webp';

const CompanySection = () => {
  const data = [
    { title: 20, description: "Years of Experience" },
    { title: 40, description: "Financial Institutions" },
    { title: 200, description: "Customers Each" },
  ];

  const logos = [
    logo1, logo2, logo3, logo4, logo5, 
    logo6, logo7, logo8, logo9, logo10, 
    logo11, logo12, logo13, logo14, logo15
  ];

  return (
    <div className="w-8/12 mb-22 mt-22 mx-auto">
      <div className="max-w-maxContent m-8">
        <div className="flex flex-col items-center justify-center">
          <p className="text-[#1f80f0] text-base font-semibold">TRUSTED BY THE BEST</p>

          <div className="flex flex-col justify-between items-center lg:flex-row gap-10">
            {data.map((item, i) => (
              <AnimatedCounter key={i} endValue={item.title} description={item.description} />
            ))}
          </div>
        </div>
      </div>

      {/* Grid for large screens */}
      <div className="mt-25 grid grid-cols-3 gap-x-16 gap-y-[34px] max-md:hidden lg:grid-cols-5">
        {logos.map((logo, index) => (
          <div key={index} className="flex justify-center items-center">
            <img src={logo} alt={`logo${index + 1}`} className="max-w-full h-auto" />
          </div>
        ))}
      </div>

      {/* Swiper for small screens */}
      <div className="md:hidden block mt-8">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index} className="flex items-center justify-center">
              <img src={logo} alt={`logo${index + 1}`} className="w-24 h-auto " />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

// 🔥 Animated Counter Component
const AnimatedCounter = ({ endValue, description }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 4000;
    const stepTime = Math.abs(Math.floor(duration / endValue));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= endValue) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [endValue]);

  return (
    <div className="flex flex-row justify-center items-center md:flex-col">
      <p className="lg:text-[96px] text-[64px] font-bold text-[#1f80f0]">{count}+</p>
      <p className="text-base">{description}</p>
    </div>
  );
};

export default CompanySection;
