"use client";

import Wrapper from "@/components/shared/Wrapper";
import Link from "next/link";
import Card from "@/components/shared/Card";
import Program from "@/components/shared/Program";
import AI from "@/assets/images/AI.jpeg";
import { useState } from "react";

// interface CoreTrack {
//   header: string;
//   Description: string;
//   number: number;
//   border: Boolean;
// }

export const Data = [
  {
    slug: "WMD",
    header: "Specialized Program",
    title: "Web 3.0(Blockchain) and Metaverse Specialization 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A ex iste atque dolorem. Architecto dolore est voluptas quaerat expedita quia voluptates laboriosam, autem quam consequatur odio repudiandae sint ducimus facilis.",
    image: AI,
    id: 1,
    quarters: [
      {
        header: "Quarter 3-1",
        Description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. A ex iste atque dolorem. Architecto dolore est voluptas quaerat expedita quia voluptates laboriosam, autem quam consequatur odio repudiandae sint ducimus facilis.",
        number: 4,
        border: true,
      },
      {
        header: "Quarter 2-1",
        Description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. A ex iste atque dolorem. Architecto dolore est voluptas quaerat expedita quia voluptates laboriosam, autem quam consequatur odio repudiandae sint ducimus facilis.",
        number: 5,
        border: true,
      },
    ],
  },
  {
    slug: "AI",
    header: "Specialized Program",
    title: "Web 3.0(Blockchain) and Metaverse Specialization 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A ex iste atque dolorem. Architecto dolore est voluptas quaerat expedita quia voluptates laboriosam, autem quam consequatur odio repudiandae sint ducimus facilis.",
    image: AI,
    id: 2,
    quarters: [
      {
        header: "Quarter 3-2",
        Description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. A ex iste atque dolorem. Architecto dolore est voluptas quaerat expedita quia voluptates laboriosam, autem quam consequatur odio repudiandae sint ducimus facilis.",
        number: 4,
        border: true,
      },
      {
        header: "Quarter 2-2",
        Description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. A ex iste atque dolorem. Architecto dolore est voluptas quaerat expedita quia voluptates laboriosam, autem quam consequatur odio repudiandae sint ducimus facilis.",
        number: 5,
        border: true,
      },
    ],
  },
  {
    slug: "CC",
    header: "Specialized Program",
    title: "Web 3.0(Blockchain) and Metaverse Specialization 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A ex iste atque dolorem. Architecto dolore est voluptas quaerat expedita quia voluptates laboriosam, autem quam consequatur odio repudiandae sint ducimus facilis.",
    image: AI,
    id: 3,
    quarters: [
      {
        header: "Quarter 3-1",
        Description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. A ex iste atque dolorem. Architecto dolore est voluptas quaerat expedita quia voluptates laboriosam, autem quam consequatur odio repudiandae sint ducimus facilis.",
        number: 4,
        border: true,
      },
      {
        header: "Quarter 2-1",
        Description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. A ex iste atque dolorem. Architecto dolore est voluptas quaerat expedita quia voluptates laboriosam, autem quam consequatur odio repudiandae sint ducimus facilis.",
        number: 5,
        border: true,
      },
    ],
  },
  {
    slug: "ML",
    header: "Specialized Program",
    title: "Web 3.0(Blockchain) and Metaverse Specialization 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A ex iste atque dolorem. Architecto dolore est voluptas quaerat expedita quia voluptates laboriosam, autem quam consequatur odio repudiandae sint ducimus facilis.",
    image: AI,
    id: 4,
    quarters: [
      {
        header: "Quarter 3-1",
        Description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. A ex iste atque dolorem. Architecto dolore est voluptas quaerat expedita quia voluptates laboriosam, autem quam consequatur odio repudiandae sint ducimus facilis.",
        number: 4,
        border: true,
      },
      {
        header: "Quarter 2-1",
        Description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. A ex iste atque dolorem. Architecto dolore est voluptas quaerat expedita quia voluptates laboriosam, autem quam consequatur odio repudiandae sint ducimus facilis.",
        number: 5,
        border: true,
      },
    ],
  },
  {
    slug: "MERN",
    header: "Specialized Program",
    title: "Web 3.0(Blockchain) and Metaverse Specialization 5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A ex iste atque dolorem. Architecto dolore est voluptas quaerat expedita quia voluptates laboriosam, autem quam consequatur odio repudiandae sint ducimus facilis.",
    image: AI,
    id: 5,
    quarters: [
      {
        header: "Quarter 3-1",
        Description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. A ex iste atque dolorem. Architecto dolore est voluptas quaerat expedita quia voluptates laboriosam, autem quam consequatur odio repudiandae sint ducimus facilis.",
        number: 4,
        border: true,
      },
      {
        header: "Quarter 2-1",
        Description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. A ex iste atque dolorem. Architecto dolore est voluptas quaerat expedita quia voluptates laboriosam, autem quam consequatur odio repudiandae sint ducimus facilis.",
        number: 5,
        border: true,
      },
    ],
  },
  {
    slug: "MONGO",
    header: "Specialized Program",
    title: "Web 3.0(Blockchain) and Metaverse Specialization 6",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A ex iste atque dolorem. Architecto dolore est voluptas quaerat expedita quia voluptates laboriosam, autem quam consequatur odio repudiandae sint ducimus facilis.",
    image: AI,
    id: 6,
    quarters: [
      {
        header: "Quarter 3-1",
        Description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. A ex iste atque dolorem. Architecto dolore est voluptas quaerat expedita quia voluptates laboriosam, autem quam consequatur odio repudiandae sint ducimus facilis.",
        number: 4,
        border: true,
      },
      {
        header: "Quarter 2-5",
        Description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. A ex iste atque dolorem. Architecto dolore est voluptas quaerat expedita quia voluptates laboriosam, autem quam consequatur odio repudiandae sint ducimus facilis.",
        number: 5,
        border: true,
      },
    ],
  },
  {
    slug: "MONGO1",
    header: "Specialized Program",
    title: "Web 3.0(Blockchain) and Metaverse Specialization 6",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A ex iste atque dolorem. Architecto dolore est voluptas quaerat expedita quia voluptates laboriosam, autem quam consequatur odio repudiandae sint ducimus facilis.",
    image: AI,
    id: 6,
    quarters: [
      {
        header: "Quarter 3-1",
        Description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. A ex iste atque dolorem. Architecto dolore est voluptas quaerat expedita quia voluptates laboriosam, autem quam consequatur odio repudiandae sint ducimus facilis.",
        number: 4,
        border: true,
      },
      {
        header: "Quarter 2-5",
        Description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. A ex iste atque dolorem. Architecto dolore est voluptas quaerat expedita quia voluptates laboriosam, autem quam consequatur odio repudiandae sint ducimus facilis.",
        number: 5,
        border: true,
      },
    ],
  },
  {
    slug: "MONGO2",
    header: "Specialized Program",
    title: "Web 3.0(Blockchain) and Metaverse Specialization 6",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A ex iste atque dolorem. Architecto dolore est voluptas quaerat expedita quia voluptates laboriosam, autem quam consequatur odio repudiandae sint ducimus facilis.",
    image: AI,
    id: 6,
    quarters: [
      {
        header: "Quarter 3-1",
        Description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. A ex iste atque dolorem. Architecto dolore est voluptas quaerat expedita quia voluptates laboriosam, autem quam consequatur odio repudiandae sint ducimus facilis.",
        number: 4,
        border: true,
      },
      {
        header: "Quarter 2-5",
        Description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. A ex iste atque dolorem. Architecto dolore est voluptas quaerat expedita quia voluptates laboriosam, autem quam consequatur odio repudiandae sint ducimus facilis.",
        number: 5,
        border: true,
      },
    ],
  },
  {
    slug: "MONGO3",
    header: "Specialized Program",
    title: "Web 3.0(Blockchain) and Metaverse Specialization 6",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A ex iste atque dolorem. Architecto dolore est voluptas quaerat expedita quia voluptates laboriosam, autem quam consequatur odio repudiandae sint ducimus facilis.",
    image: AI,
    id: 6,
    quarters: [
      {
        header: "Quarter 3-1",
        Description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. A ex iste atque dolorem. Architecto dolore est voluptas quaerat expedita quia voluptates laboriosam, autem quam consequatur odio repudiandae sint ducimus facilis.",
        number: 4,
        border: true,
      },
      {
        header: "Quarter 2-5",
        Description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. A ex iste atque dolorem. Architecto dolore est voluptas quaerat expedita quia voluptates laboriosam, autem quam consequatur odio repudiandae sint ducimus facilis.",
        number: 5,
        border: true,
      },
    ],
  },
];


const SpecializedTracks = () => {

  const info =
    "After completing the first three quarters the participants will select \n one or more specialization consisting of the two courses each.";
  const [selectedItem, setSelectedItem] = useState("WMD")
  const selectedItemData = Data.find((item)=> item.slug === selectedItem)
   
    return (
      <section className="z-[-10]">
        <Wrapper>
          <h1 className="text-black text-3xl font-bold">Specialized Tracks:</h1>
          <p className="mt-6 max-w-screen-xl whitespace-pre-line">{info}</p>
          <div className="flex flex-col gap-14 sticky z-[-10] md:flex-row">
            {/* First Section */}
            <div className="flex flex-col mt-6 border-2 border-grey rounded-2xl border-[#00616C] w-full self-start z-[-10] sticky top-28 md:w-[60%]">
              <p className="text-[#00616C] mt-6 mx-12">Specialized Program</p>
              <h4 className="text-black font-semibold mt-2 mx-12 text-2xl">
                {selectedItemData?.title}
              </h4>
              <p className="text-xl mt-2 mx-12">
                {selectedItemData?.description}
              </p>
              <div className="mx-12 mt-5">
                <Link href={"#"} className="underline text-teal-800 font-bold">
                  Learn More{" "}
                </Link>
              </div>
              <div className="flex flex-col gap-3 mx-12 my-12 md:flex-row">
                {selectedItemData?.quarters.map((item,i) => (
                  <Card
                    heading={item.header}
                    description={item.Description}
                    number={item.number}
                    border={false}
                    key={i}
                  />
                ))}
              </div>
            </div>
            {/* Second Section */}
            <div className="flex flex-col flex-1 gap-4 gap-x-2 gap-y-4 overflow-hidden">
              {Data.map((item, i) => (
                <div key={i} onClick={() => setSelectedItem(item.slug)}>
                  <Program title={item.header} program={item.title} />
                </div>
              ))}
            </div>
          </div>
        </Wrapper>
      </section>
    );
};

export default SpecializedTracks;
