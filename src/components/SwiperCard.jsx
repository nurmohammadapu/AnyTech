import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import hero1 from "../assets/icons/hero1.avif";
import hero2 from "../assets/icons/hero2.avif";

const data = [
  {
    title1: "Customer focused",
    title: "Purpose-built financial services",
    description:
      "Elevate customer experience and achieve agile financial product innovation with the world’s first, consumer-centric, real-time transaction account processing and credit limit system.",
    description2:
      "Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behaviour and product marketing opportunities.",
    img: hero1,
  },
  {
    title1: "Agile and adaptable",
    title: "Agile and adaptable for growth",
    description:
      "Innovate with evolving customer demands through our open platform-based technology architecture. Stay ahead of the ever-changing financial landscape with a strong focus on security, compliance and performance.",
    description2:
      "Optimise your offerings to unlock new revenue streams and deliver an extraordinary customer experience, with digitally designed core banking, payment processing and lending capabilities.",
    img: hero2,
  },
  {
    title1: "Compliance ready",
    title: "Manage compliance with ease",
    description:
      "Navigate through the evolving regulatory landscape with confidence by streamlining compliance management—through real-time risk monitoring solutions powered by AI and machine learning.",
    description2:
      "Transform your compliance strategy with flexible and diversified policy rules, powered by cutting-edge technology that is designed for seamless integration with core banking and card payment systems.",
    img: hero1,
  },
  {
    title1: "Secure and safe",
    title: "Highly secure and safe",
    description:
      "Discover unparalleled security trusted by financial institutions across the globe. Our applications are meticulously developed in compliance with international security standards, drawing on 20 years of technical expertise.",
    description2:
      "Join over 40 esteemed Fls, each serving more than 200 million customers, and benefit from our secure, robust and reliable infrastructure.",
    img: hero2,
  },
];

const SwiperCard = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  const [isLgScreen, setIsLgScreen] = useState(window.innerWidth >= 1024);

  // Function to update screen size state
  useEffect(() => {
    const handleResize = () => {
      setIsLgScreen(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavClick = (index) => {
    if (isLgScreen) {
      setActiveIndex(index);
      if (swiperRef.current) {
        swiperRef.current.slideTo(index);
      }
    }
  };

  return (
    <div className="bg-[#F8FCFF]">
      <div className="w-10/12 max-w-maxContent mx-auto flex flex-col justify-center items-center p-8">
        {/* Section Header */}
        <div className="flex flex-col justify-center items-center">
          <p className="text-[#1f80f0] text-base font-semibold">
            TECHNOLOGY BUILT FOR YOU
          </p>
          <p className="md:text-[56px] text-4xl text-[#0b305b] font-bold mt-6 font-montserrat">
            The future of finance
          </p>
        </div>

        {/* Navbar (Visible only on lg and above) */}
        <nav className="hidden lg:flex gap-8 mt-6">
          {data.map((item, index) => (
            <button
              key={index}
              onClick={() => handleNavClick(index)}
              className={`px-4 py-2 rounded-4xl text-lg font-semibold transition-colors ${
                activeIndex === index
                  ? "bg-blue-100 text-[#1f80f0]"
                  : "text-[#1f80f0] hover:bg-blue-100"
              }`}
            >
              {item.title1}
            </button>
          ))}
        </nav>

        {/* Swiper Component */}
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="w-full max-w-7xl mt-6"
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {data.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white shadow-lg lg:h-[550px] w-full p-6 lg-p-16 rounded-lg">
                <div className="flex flex-col md:flex-row gap-12 justify-between items-center">
                  <div className="space-y-6 max-w-[50%] md:text-left">
                    <p className="text-blue-500 text-base font-medium">{item.title1}</p>
                    <p className="text-4xl font-bold text-[#1a365d] lg:text-5xl">
                      {item.title}
                    </p>
                    <div className="block mx-auto max-w-[317px] max-h-[485px] object-cover md:hidden">
                      <img
                        className="rounded-lg"
                        src={item.img}
                        alt="heroimg"
                      />
                    </div>
                    <div className="space-y-4 text-gray-600 text-lg">
                      <p className="font-semibold">{item.description}</p>
                      <p>{item.description2}</p>
                    </div>
                  </div>
                  <div className="hidden md:block max-w-[426px] max-h-[517px] object-cover">
                    <img className="rounded-lg" src={item.img} alt="heroimg" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperCard;
