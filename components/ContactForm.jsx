"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";

const ContactForm = () => {
  return (
    <div className="xl:w-[54%] ">
      <form
        action=""
        className="flex flex-col gap-6 p-10 bg-[#2323292a] rounded-xl"
      >
        <h3 className=" text-4xl text-accent">Let&apos;s work together</h3>
        <p className=" text-white/60">
        I am a dedicated and results-oriented Full Stack Developer with over 2 years of experience, specializing in React.js and Next.js. My expertise lies in crafting dynamic and responsive user interfaces, ensuring a seamless user experience. I am deeply involved in every phase of the project lifecycle, from ideation and design to robust implementation and seamless integration. Let&apos;s collaborate to bring your ideas to life with efficiency and innovation.

        </p>
        {/* input */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input type="firstname" placeholder="Frist Name" />
          <Input type="lastname" placeholder="Last Name" />
          <Input type="email" placeholder="Email" />
          <Input type="phone" placeholder="Phone Number" />
        </div> */}
        {/* select */}
        {/* <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Select a service</SelectLabel>
              <SelectItem value="est">FullStack Development</SelectItem>
              <SelectItem value="cst">FrontEnd Development</SelectItem>
              <SelectItem value="mst">BacKEnd Development</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select> */}
        {/* TextArea */}
        {/* <Textarea
          className="h-[200px]"
          placeholder="Type your message here. "
        /> */}
        {/* <Button size="md" className="max-w-40 text-white">
          Send message
        </Button> */}
      </form>
    </div>
  );
};

export default ContactForm;
