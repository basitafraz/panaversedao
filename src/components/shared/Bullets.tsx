import { FC } from "react"
import Polygon from "@/assets/images/Polygon.png";
import Image from "next/image";


const Bullets:FC<{point: string}> = ({point}) => {
  return (
        <div className="flex gap-2 items-center">
          <Image src={Polygon} alt="Polygon" />
          <p className="text-xl text-black font-semi">{point}</p>
        </div>   
  );
}

export default Bullets