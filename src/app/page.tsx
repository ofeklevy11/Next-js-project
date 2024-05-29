import { Button } from "@/components/ui/button";
import Link from "next/link";

async function Hero()  {
  return (
    <div className="grid grid-cols-2 gap-8">
      <div className="p-8 flex flex-col gap-6 justify-center">
        <h1 className="text-2xl ">
          My first <b>NEXT.JS</b> website!
        </h1>
        <p className="leading-6 tracking-wide max-w-[450px]">
          I will try to do my very best to make a next.js website and improve my
          programming skills , i need to add more text so im adding this line
          lol
        </p>
      </div>
      <div className="p-8">
        <img src="\hero-img.jpg" alt="hero-img" width={800} height={800} />
      </div>
    </div>
  );
}

function TechStackCard({stackItem} : {stackItem : string}) {
  return (
    <div className="p-4 text-center border border-yellow-500 rounded-md">
      <h5>{stackItem}</h5>
    </div>
  )

}

export default function Home() {
  return (
    <main>
      <Hero />
      <h2 className="text-center max-w-[500px] mx-auto text-lg mt-16">
        Im an 23 years old aspired programmer and website builder , im
        especially love to program in next-js , react , and all the most new
        bleeding edge technologies
      </h2>
      <div className="text-center flex flex-col gap-2 py-8">
      <p>Want to know more about me? </p>
      <Link href="/about">
        <Button className="font-semibold bg-yellow-500 text-lg">About</Button>
      </Link>
      </div>
      <section className="py-8">
        <h2 className="text-2xl mb-4">My tech stack</h2>
        
        <div className="grid grid-cols-6 gap-6 mb-6   ">
          <TechStackCard stackItem='Linux'/>
          <TechStackCard stackItem='MongoDB'/>
          <TechStackCard stackItem='mySQL'/>
          <TechStackCard stackItem='postgreSQL'/>
          <TechStackCard stackItem='react'/>
          <TechStackCard stackItem='typescript'/>
          <TechStackCard stackItem='Next-JS'/>
          <TechStackCard stackItem='Node-JS'/>
          <TechStackCard stackItem='Docker'/>
          <TechStackCard stackItem='Kubernetes'/>
          <TechStackCard stackItem='HTML&CSS'/>
          <TechStackCard stackItem='Python'/>
        </div>
       
      </section>
    </main>
  );
}
