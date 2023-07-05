"use client";
import Logo from "/public/logo.png";
import Image from "next/image";
import Wrapper from "@/components/shared/Wrapper";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { useState } from "react";

let links = [
  { name: "Home", link: "/" },
  { name: "About", link: "/" },
  { name: "Courses", link: "/" },
  { name: "Blogs", link: "/" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-white">
      <Wrapper>
        <div>
          <div className="flex flex-col justify-start md:flex-row  md:justify-between max-w-screen-xl mx-auto py-5 sticky top-0 md:items-center">
            <div className="flex justify-between">
              <Image src={Logo} alt="panaverse dao logo" />
              <div onClick={() => setOpen(!open)} className="right-0">
                {open ? (
                  <AiOutlineClose className="mt-5 md:hidden" />
                ) : (
                  <RxHamburgerMenu className="mt-5 md:hidden" />
                )}
              </div>
            </div>

            <ul
              className={`${
                open ? "block" : "hidden"
              } flex flex-col gap-4 md:flex-row md:flex`}
            >
              {links.map((item, i) => (
                <li key={i} className="hover:underline">
                  <Link href={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
