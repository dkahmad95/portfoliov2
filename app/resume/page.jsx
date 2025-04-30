"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNode,
  FaCloud,
} from "react-icons/fa";
import {
  SiTypescript,
  SiRedux,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiNestjs,
  SiMicrosoftazure,
} from "react-icons/si";

//about info
const about = {
  title: "About me",
  description:
    "I'm Ahmad Dekmak, a passionate and results-oriented Full Stack Developer with over 2 years of hands-on experience. I specialize in React.js and Next.js, focusing on crafting dynamic and responsive user interfaces. My expertise extends to backend development using Node.js, Express, and Nest.js, as well as cloud services like AWS and Azure. I’ve contributed to projects from ideation and design to deployment, ensuring seamless integration, performance, and scalability. I thrive on solving complex problems and building high-quality digital experiences.",

  info: [
    { fieldName: "Name", fieldValue: "Ahmad Dekmak" },
    { fieldName: "Phone", fieldValue: "+961 78 940 697" },
    { fieldName: "Experience", fieldValue: "2+ years" },
    { fieldName: "Nationality", fieldValue: "Lebanese" },
    { fieldName: "Email", fieldValue: "Dkahmad95@gmail.com" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Languages", fieldValue: "Arabic, English" },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "Over the years, I have accumulated extensive experience working in different roles and organizations. My journey in the tech industry has equipped me with a diverse skill set, allowing me to excel full stack development.",

  items: [
    {
      company: "I-Aim Solutions",
      position: "Front End Developer",
      duration: "01/2024-11/2024",
    },

    {
      company: "ESDT",
      position: "Full Stack Developer",
      duration: "09/2022-01/2024",
    },
  ],
};

//eduction data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "My educational background has been instrumental in shaping my career in technology and management. I have pursued formal degrees and engaged in continuous learning through online courses to stay updated with the latest industry trends.",

  items: [
    {
      university: "Microsoft",
      degree: "Azure Administrator Associate (AZ-104) Certification",
      years: "2024",
    },
    {
      university: "Microsoft",
      degree: "Azure Fundamentals (AZ-900) Certification",
      years: "2024",
    },
    {
      university: "Online Courses and Tutorials",
      degree: "Certifications of Completion",
      years: "2021-2022",
    },
    {
      university: "Lebanese International University",
      degree: "MBA in Management Information System",
      years: "2017-2019",
    },
    {
      university: "Lebanese International University",
      degree: "Bachelor in Management Information System",
      years: "2014-2017",
    },
  ],
};

//skills data
const skills = {
  title: "My skills",
  description:
    "Throughout my career as a Full Stack Developer, I have honed a diverse set of technical skills that enable me to build robust, scalable, and efficient web applications. My expertise spans across both frontend and backend technologies, ensuring seamless integration and performance. Here are the key technologies I work with:",

  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html",
    },

    {
      icon: <FaCss3 />,
      name: "Css",
    },

    {
      icon: <FaJs />,
      name: "javascript",
    },

    {
      icon: <SiTypescript />,
      name: "typescript",
    },

    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <FaReact />,
      name: "react native",
    },
    {
      icon: <SiRedux />,
      name: "redux",
    },

    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind css",
    },
    {
      icon: <FaNode />,
      name: "node.js",
    },
    {
      icon: <SiExpress />,
      name: "express.js",
    },

    {
      icon: <SiNestjs />,
      name: "nest.js",
    },

    // Add Cloud and Azure skills
    {
      icon: <SiMicrosoftazure />,
      name: "Azure",
    },
    {
      icon: <FaCloud />,
      name: "Cloud Computing",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className=" container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          {/* Tabs */}
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* Experience */}
            <TabsContent className="w-full" value="experience">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#2323292a] h-[184px] py-8 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] bg-accent rounded-full"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education */}
            <TabsContent className="w-full" value="education">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#2323292a] h-[184px] py-8 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.years}</span>
                          <h3 className="text-xl  text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] bg-accent rounded-full"></span>
                            <p className="text-white/60">{item.university}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills */}
            <TabsContent className="w-full h-full mb-4" value="skills">
              <div className="flex flex-col gap-[30px]">
                <div className=" flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#2323292a] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* About */}
            <TabsContent
              className="w-full text-center xl:text-left"
              value="about"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="gird grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0 ">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
