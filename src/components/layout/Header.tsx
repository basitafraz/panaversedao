import Link from 'next/link';
import Logo from '/public/logo.png';
import Image from 'next/image';
import Wrapper from '@/components/shared/Wrapper';


const Header = () => {
  return (
    <header className='sticky top-0 bg-white'>
      <Wrapper>
        <div className="flex justify-between max-w-screen-xl mx-auto py-5 sticky top-0 items-center">
          {/* logo */}
          <div>
            {/* <h2 className="text-xl font-bold">Panaverse Dao</h2> */}
            <Image src={Logo} alt="panaverse dao logo" />
          </div>

          {/* navigation */}
          <ul className="flex gap-6 font-medium text-black">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/courses"}> Courses</Link>
            </li>
            <li>
              <Link href={"/blog"}> Blogs</Link>
            </li>
          </ul>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
