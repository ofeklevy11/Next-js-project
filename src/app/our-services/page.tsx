import CustomCard from "@/components/custom-card";
import PageTitle from "@/components/page-title";
import { Button } from "@/components/ui/button";
import React from "react";
import { CgWebsite } from "react-icons/cg";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdOutlineSecurity } from "react-icons/md";

const cardContent = [
  {
    title: "SEO",
    content: (
      <p>
        🚀 Unlock the true potential of your website with our top-tier SEO
        services. By optimizing your site's content, structure, and performance,
        we ensure you climb to the top of search engine rankings. 
      </p>
    ),
    description: <FaMagnifyingGlass />,
  },
  {
    title: "Website Building",
    content: (
      <p>
        🌟 Transform your online presence with our expert website building
        services. We create stunning, responsive websites that not only look
        great but also provide a seamless user experience.
      </p>
    ),
    description: <CgWebsite />,

    
  },
  {
    title: "Cybersecurity",
    content: (
      <p>
        🛡️ Protect your digital assets with our comprehensive cybersecurity
        solutions. In today's world, cyber threats are ever-present and
        increasingly sophisticated. 
      </p>
    ),
    description: <MdOutlineSecurity />

  },
  {
    title: "Cybersecurity",
    content: (
      <p>
        🛡️ Protect your digital assets with our comprehensive cybersecurity
        solutions. In today's world, cyber threats are ever-present and
        increasingly sophisticated.
      </p>
    ),
    description: <MdOutlineSecurity />

  },
  {
    title: "Cybersecurity",
    content: (
      <p>
        🛡️ Protect your digital assets with our comprehensive cybersecurity
        solutions. In today's world, cyber threats are ever-present and
        increasingly sophisticated. 
      </p>
    ),
    description: <MdOutlineSecurity />

  },
  {
    title: "Cybersecurity",
    content: (
      <p>
        🛡️ Protect your digital assets with our comprehensive cybersecurity
        solutions. In today's world, cyber threats are ever-present and
        increasingly sophisticated. 
      </p>
    ),
    description: <MdOutlineSecurity />

  },
];

const page = () => {
  return (
    <>
      <PageTitle title="our services" />
      <div className="grid place-items-center">
        <section className="grid grid-cols-3 mt-8 gap-12 ">
          {cardContent.map((card) => (
            <CustomCard
              key={card.title}
              title={card.title}
              content={card.content}
              description={card.description}
              
            />
          ))}
        </section>
        <h2 className="my-6 text-2xl">Ready to jump to a free Match call? </h2>
        <Button className="mb-10" >Contact us now</Button>
      </div>
    </>
  );
};

export default page;
