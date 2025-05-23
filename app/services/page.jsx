"use client";

import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    num: "01",
    title: "Full Stack Development",
    description:
      "Expertise in building end-to-end web applications, managing both client-side and server-side development to create seamless, high-performance web solutions.",
    href: "",
  },
  {
    num: "02",
    title: "Frontend Development",
    description:
      "Specialized in crafting responsive and dynamic user interfaces using modern frameworks like React.js and Next.js, ensuring an exceptional user experience.",
    href: "",
  },
  {
    num: "03",
    title: "Backend Development",
    description:
      "Proficient in designing and implementing robust server-side logic and APIs, with a focus on scalability, security, and efficiency using technologies like Node.js (Express and NestJs).",
    href: "",
  },
  {
    num: "04",
    title: "Mobile Development",
    description:
      "Skilled in developing cross-platform mobile applications using React Native, delivering smooth and responsive experiences for both iOS and Android devices with a focus on performance and scalability.",
    href: "",
  },
  {
    num: "05",
    title: "Azure Cloud Development",
    description:
      "Experienced in leveraging Microsoft Azure services for cloud-native application development, including deployment and scaling applications efficiently with Azure App Services.",
    href: "",
  },
];

import { motion } from "framer-motion";
const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 ">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <div
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </div>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 ">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
