import Wrapper from "@/components/shared/Wrapper";
import Button from "@/components/shared/Button";
import Card from "@/components/shared/Card";
import Background from "@/assets/images/Background.png";
import Image from "next/image";

interface CoreTrack {
  header: string;
  Description: string;
  number: number;
}

const CoreTracksData:CoreTrack[] = [
  {
    header: "Quarter 1",
    Description: "CS-101: Object oriented programming using typed programming",
    number: 1,
  },
  {
    header: "Quarter 2",
    Description: "CS-101: Object oriented programming using typed programming",
    number: 2,
  },
  {
    header: "Quarter 3",
    Description: "CS-101: Object oriented programming using typed programming",
    number: 3,
  }
];



const CoreTracks = () => {
  const header = "Core Courses \n (Common in All Specializations):";

  return (
    <section className="relative z-[-10]">
      <Wrapper>
        {/* Content */}
        <h4 className="text-[#00616C] mt-48 font-bold">PROGRAM OF STUDIES</h4>
        <h1 className="text-black text-3xl font-bold mt-4 md:text-5xl whitespace-pre-line">
          {header}
        </h1>
        <p className="mt-6 max-w-screen-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores
          perferendis pariatur autem ipsa labore ex aspernatur fugiat.
        </p>
        <div className="mt-6">
          <Button text="Learn More" />
        </div>
        {/* Boxes */}
        <div className="my-20 flex flex-col gap-3 max-w-screen-lg items-center justify-center md:flex-row">
          {CoreTracksData.map((item: CoreTrack) => (
            <div key={item.number}>
              <Card
                heading={item.header}
                description={item.Description}
                number={item.number}
              />
            </div>
          ))}
        </div>
      </Wrapper>
      <Image
        src={Background}
        alt="background"
        className="absolute -top-1/2 left-0"
        height={700}
        width={700}
      />
    </section>
  );
  ``;
};

export default CoreTracks;
