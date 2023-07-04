import Wrapper from "@/components/shared/Wrapper";
import Left from "@/assets/images/Left.png";
import Image from "next/image";
import Bullets from "@/components/shared/Bullets";

const outcome = ["Product Ownership", "Freelancing", "Global Marketing by DAO", "Boosting Economy"]

const Outcome = () => (
  <Wrapper>
    <section className="mb-24">
      <div className="flex flex-col gap-4 mt-[170px] items-center md:flex-row w-full">
        <Image src={Left} alt={"Outcome of the program"} className="flex-1"/>
        <div className="flex-1 flex flex-col">
          <h1 className="font-bold text-black text-4xl">
            The Outcome for Participants of the Program
          </h1>
          <p className="mt-[22px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
            necessitatibus est. Omnis distinctio, labore eveniet maiores modi
            aspernatur nisi dolorem quod laboriosam saepe, id amet ducimus natus
            rem sed veritatis Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Totam, necessitatibus est. Omnis distinctio, labore eveniet
            maiores modi aspernatur nisi dolorem quod laboriosam saepe, id amet
            ducimus natus rem sed veritatis!
          </p>
          <div className="mt-12 gap-12 grid grid-cols-2">
           { outcome.map((item, i) => (
            <h3 key={i}>
              <Bullets point={item}/>
            </h3>
           ))}
          </div>
        </div>
      </div>
    </section>
  </Wrapper>
);

export default Outcome;
