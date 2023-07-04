import Wrapper from "@/components/shared/Wrapper";
import HeroPoster from "@/assets/images/hero.png";
import Image from "next/image";
import Button from "@/components/shared/Button";

const Hero = () => {
  return (
    <section>
      <Wrapper>
        <div className="flex flex-col md:flex-row items-center">
          {/* Left side */}
          <div className="flex-1 ">
            <h4 className="text-teal-800 font-semibold text-lg mt-16">
              Predential Initiative For Artificail Intelligence and Computing
            </h4>
            <h1 className="font-bold text-4xl sm:text-6xl mt-8 text-black">
              Certified Web3 and Metaverse Developer
            </h1>
            <p className="text-lg mt-6 text-slate-600 max-w-screen-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              beatae, similique maxime, impedit fugiat soluta dolorem placeat et
              enim minus, ut iusto consequatur repudiandae autem consectetur!
              Quas ipsa repudiandae iusto?
            </p>
            <p className="text-lg mt-6 text-slate-600 max-w-screen-xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui
              temporibus dignissimos molestiae, quaerat accusantium doloremque
              eius! Animi repellat ad placeat asperiores? Aperiam, laboriosam
              ad! Saepe voluptatum sequi iure qui eum.
            </p>
            <div className="mt-6">
              <Button text="Enroll Now" />
            </div>
          </div>
          {/* Right side */}
          <div className="flex-1">
            <Image src={HeroPoster} alt="Hero Image" />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;
