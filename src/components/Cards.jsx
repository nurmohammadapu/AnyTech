import React from "react";
import { motion } from "framer-motion";
import icon1 from "../assets/icons/icon1.svg";
import icon2 from "../assets/icons/icon2.svg";
import icon3 from "../assets/icons/icon3.avif";
import heroimg from '../assets/icons/hero.avif'


const data = [
  {
    icon: icon1,
    title: "Full-suite solutions",
    description:
      "Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions.",
  },
  {
    icon: icon3,
    title: "Simplify the complex",
    description:
      "Simplify complex processes and optimise your financial operations by leveraging the power of AI, Blockchain, Cloud Computing, and Big Data.",
  },
  {
    icon: icon2,
    title: "Cutting-edge tech",
    description:
      "We seamlessly combine cutting-edge technologies, resulting in an unparalleled fintech experience for financial institutions.",
  },
];

const Cards = () => {
  return (
    <div className="w-10/12 max-w-maxContent mx-auto flex flex-col justify-center items-center p-8">
      {/* Section Header */}
      <div className="flex flex-col justify-center items-center">
        <p className="text-[#1f80f0] text-base font-semibold">OUR PHILOSOPHY</p>
        <p className="md:text-[56px] text-4xl text-[#0b305b] font-bold mt-6 font-montserrat">
          Human-centred innovation
        </p>
      </div>
      {/* Cards Section */}
      <div className="flex md:flex-row flex-col gap-7 mt-10">
        {data.map((item, i) => (
          <motion.div
            key={i}
            className="p-6 bg-[#F8FCFF] max-w-[360px] rounded-2xl shadow-lg"
            initial={{ opacity: 0, y: 50 }} // Start hidden & below
            whileInView={{ opacity: 1, y: 0 }} // Animate upwards
            transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.2 }} // Staggered effect
            viewport={{ once: true }}
          >
            <img className="w-8 h-8 lg:h-[50px] lg:w-[50px]" src={item.icon} />
            <p className="text-xl mt-6 font-Montserrat lg:text-2xl font-semibold text-gray-900 mb-4">
              {item.title}
            </p>
            <p className="text-gray-600 mt-6">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
