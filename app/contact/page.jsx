"use client";



import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: <a   target="_blank"
    rel="noopener noreferrer" href="tel:96178940697">(+961) 78 940 697</a>
     ,
  },
  {
    icon: <FaWhatsapp />,
    title: "WhatsApp",
    description: <a   target="_blank"
    rel="noopener noreferrer" href="https://wa.link/yyewzo">Click to chat</a>,
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: <a  target="_blank"
    rel="noopener noreferrer" href="mailto:dkahmad95@gmail.com">Dkahmad95@gmail.com</a>,
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: <a  target="_blank"
    rel="noopener noreferrer" href="https://maps.app.goo.gl/SU9fkn6HL8EsXLTq7">Lebanon, Beirut</a>,
  },
];

import { motion } from "framer-motion";
// import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
      {/* <ContactForm/> */}
          {/* info */}
          <div className="flex-1 items-center xl:justify-end  mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
            {info.map((item, index) => {
              return (
                <li key={index} className="flex items-center gap-6">
                  <div className=" w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#2323292a]  text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              );
            })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
