"use client";

import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import WorkSliderbtns from "@/components/WorkSliderbtns";
import { RiArrowDownSLine } from "react-icons/ri";

const projects = [
  {
    num: "01",
    category: "Full Stack",
    title: "E-commerce",
    description:
      "An online store for selling products with a user-friendly interface.",
    image: "/assets/work/ecommerce.png",
    stack: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "React" },
      { name: "Express.js" },
      { name: "MongoDB" },
      { name: "Node.js" },
      { name: "Stripe" },
    ],
    liveLink: "https://dekmak-ecommerce-mern.vercel.app/",
    githubLink: {
      client: "https://github.com/dkahmad95/ecommerce-client",
      api: "https://github.com/dkahmad95/ecommerce-api",
    },
  },
  {
    num: "02",
    category: "Full Stack",
    title: "Jewelry Management System",
    description:
      "An online Management System for managing suppliers, customers, stock, sales, and expenses with a user-friendly interface.",
    image: "/assets/work/jewelry1.png",
    stack: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "Next.js" },
      { name: "Nest.js" },
      { name: "Tailwind" },
      { name: "TypeOrm" },
      { name: "Postgres/SQL" },
    ],
    liveLink: "https://mystore.com",
    githubLink: {
      client: "https://github.com/dkahmad95/jewelry-rms-frontend",
      api: "https://github.com/dkahmad95/jewelry-rms-backend1",
    },
  },
  {
    num: "03",
    category: "Full Stack",
    title: "Blog Platform",
    description: "A blogging platform for users to write and share articles.",
    image: "/assets/work/blog.png",
    stack: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "React" },
      { name: "Express.js" },
      { name: "MongoDB" },
      { name: "Node.js" },
    ],
    liveLink: "https://dekmak-mern-blog.vercel.app/",
    githubLink: {
      client: "https://github.com/dkahmad95/mern-blog-client",
      api: "https://github.com/dkahmad95/mern-blog-api",
    },
  },
  {
    num: "04",
    category: "Frontend",
    title: "Eshtirakat Landing Page",
    description:
      "A landing page for users to explore and engage with the Eshtirakat platform.",
    image: "/assets/work/eshtirakat.png",
    stack: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "Next.js" },
      { name: "Tailwind" },
    ],
    liveLink: "https://eshtirakat-landing-page.vercel.app/",
    githubLink: {
      client: "https://github.com/dkahmad95/Eshtirakat-landing-page",
    },
  },
  {
    num: "05",
    category: "Frontend",
    title: "Car Rent Management System",
    description:
      "A management system for handling car rental services with a user-friendly interface.",
    image: "/assets/work/car-rent.png",
    stack: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "Vite" },
      { name: "React" },
      { name: "Redux" },
    ],
    liveLink: "https://car-rent-system-front-end.vercel.app/",
    githubLink: {
      client: "https://github.com/dkahmad95/car-rent-system-frontEnd",
    },
  },
  {
    num: "06",
    category: "Frontend",
    title: "Hazime Portfolio",
    description:
      "A personal portfolio website to showcase client certifications, work, and information.",
    image: "/assets/work/hazime-port.png",
    stack: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "React" },
      { name: "Next.js" },
      { name: "Tailwind" },
      { name: "Shadcn" },
      { name: "Framer Motion" },
    ],
    liveLink: "https://ali-hazime.vercel.app/",
    githubLink: {
      client: "https://github.com/dkahmad95/ali-hazime-portfolio",
    },
  },
  {
    num: "07",
    category: "Frontend",
    title: "Zeinab Studio",
    description:
      "A personal portfolio website to showcase client certifications, work, and information.",
    image: "/assets/work/zeinab-port.png",
    stack: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "React" },
      { name: "Next.js" },
      { name: "Tailwind" },
      { name: "Shadcn" },
      { name: "Framer Motion" },
    ],
    liveLink: "https://zeinabdekmakstudio.vercel.app/",
    githubLink: {
      client: "https://github.com/dkahmad95/ZeinabDekmak-portfolio",
    },
  },
  {
    num: "08",
    category: "Frontend",
    title: "Dashboard",
    description:
      "A front-end dashboard UI with a user-friendly design, providing essential features and intuitive navigation.",
    image: "/assets/work/dashboard.png",
    stack: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "React" },
    ],
    liveLink: "https://react-dashbourd.vercel.app/",
    githubLink: {
      client: "https://github.com/dkahmad95/react-dashbourd",
    },
  },
  {
    num: "09",
    category: "Frontend",
    title: "My Portfolio",
    description:
      "A personal portfolio website to showcase my skills and projects.",
    image: "/assets/work/dekmak-port.png",
    stack: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "React" },
      { name: "Next.js" },
      { name: "Tailwind" },
      { name: "Shadcn" },
      { name: "Framer Motion" },
    ],
    liveLink: "/",
    githubLink: {
      client: "",
    },
  },
  {
    num: "10",
    category: "Frontend",
    title: "Blog",
    description: "A blogging platform for users to write and share articles.",
    image: "/assets/work/next-blog.png",
    stack: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "React" },
      { name: "Next.js" },
    ],
    liveLink: "https://blog-next-mongodb.vercel.app/",
    githubLink: {
      client: "https://github.com/dkahmad95/blog-next-mongodb",
    },
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on the current slide index
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* project details */}
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-3 xl:order-none">
            <div className=" flex flex-col gap-[30px] h-[50%]">
              {/* outlined num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className=" text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              {/* projext title */}
              <h2 className="text-white/80">{project.title}</h2>
              {/* projext description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className=" flex gap-4 flex-wrap">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent ">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* boreder */}
              <div className=" border border-white/20"></div>
              {/* bottons */}
              <div className="flex items-center gap-4">
                {/* live link button */}
                <Link
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex  flex-col gap-2 justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        {
                          <span className="xl:hidden text-xs text-accent">
                            Link
                          </span>
                        }
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github link buttons */}
                {project.githubLink.client && (
                  <Link
                    href={project.githubLink.client}
                    key="client"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex flex-col gap-2 justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                          {
                            <span className="xl:hidden text-xs text-accent">
                              Client
                            </span>
                          }
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Client Repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {project.githubLink.api && (
                  <Link
                    href={project.githubLink.api}
                    key="api"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group flex-col gap-2">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                          {
                            <span className="xl:hidden text-xs text-accent">
                              Api
                            </span>
                          }
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>API Repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="xl:hidden flex  animate-bounce order-2 w-full justify-center items-center">
            <RiArrowDownSLine className="text-3xl text-accent text-center" />
          </div>
          {/* slider */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[250px] xl:h-[460px] relative group flex justify-center items-center bg-transparent ">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-transparent"></div>
                      {/* image */}
                      <div className="relative w-full h-full ">
                        <Image
                          src={project.image}
                          fill
                          sizes=""
                          className="object-contain"
                          alt={project.title}
                          priority
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderbtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-non"
                btnStyles=" bg-accent/50 xl:bg-accent  xl:hover:bg-accent-hover hover:bg-accent-hover/80 text-primary text-[22px]  w-[33px] h-[33px] xl:w-[44px] xl:h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
