import AI from "@/assets/images/AI.jpeg";
import Image from "next/image";
import { FC } from "react";

interface props {
  title: string;
  program: string;
  
}

const Program: FC<props> = ({title, program}) => {
  return (
    <section className="mt-6">
      <div className="flex gap-3">
        <Image src={AI} alt="AI photo" className="rounded-xl" height={56} />
        <div className="flex flex-col gap-">
          <h4 className="text-[#00616C]">{title}</h4>
          <p className="text-black font-bold">{program}</p>
        </div>
      </div>
      <div className="border border-[#DEE1E6] mt-5 w-full"></div>
    </section>
  );
};

export default Program;
