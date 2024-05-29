import PageTitle from "@/components/page-title";
import { Button } from "@/components/ui/button";
import React from "react";
import { FaPhone } from "react-icons/fa6";
import { LuMailPlus } from "react-icons/lu";

const page = () => {
  return (
    <main>
      <PageTitle title="about me" />
      <section className="py-12 text-center flex flex-col gap-8">
        <p className="leading-6 tracking-wide max-w-[600px] mx-auto">
          🚀 Passionate programmer and web developer with a keen eye for detail
          and a drive for excellence. Aspiring to become a professional software
          engineer, I thrive on creating innovative solutions and pushing the
          boundaries of web development. With a deep understanding of modern
          technologies and a commitment to continuous learning, I bring a blend
          of creativity and technical expertise to every project. Let&apos;s builda
          the future together, one line of code at a time. 🌐💻✨
        </p>
        <p className="leading-6 tracking-wide max-w-[600px] mx-auto">
          With a deep understanding of modern
          technologies and a commitment to continuous learning, I bring a blend
          of creativity and technical expertise to every project. Let&apos;s build
          the future together, one line of code at a time. 
        </p>
        <hr />
        <p className="leading-6 tracking-wide max-w-[600px] mx-auto">
          Ready to turn your vision into reality? Explore my portfolio and see
          how we can collaborate on your next big idea! 🚀
        </p>
        </section>
        <section className='py-8 text-center flex flex-col gap-2'>
        <h2 className="text-lg">I offer a <b>100%</b> free website helping call! <br />Ready to talk ? feel free to call me!</h2>
        <p>My number : 050-2611-930</p>
        <p>My email : ofeklevy53@gmail.com</p>
        <div className="flex justify-center gap-8 mt-4">
          <a href="tel:123456">
        <Button  className="flex gap-4">call now <FaPhone  style={ { color: 'green'  }} />
    </Button>
    </a>
    <a href="mailto:ofeklevy53@gmail.com">
          <Button  className="flex gap-4">email now <LuMailPlus style={ { color: 'green'  }} />
</Button>
</a>
          
        </div>
        </section>
      
    </main>
  );
};

export default page;
