import logo from "@/assets/banner/Group49.png"
import { Button } from "@/components/ui/button";
import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-scroll";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  if (typeof window !== 'undefined') {
    const changeColor = () => {
      if (window?.scrollY >= 0) {
        setColor(true);
      } else {
        setColor(false);
      }
    };
    window.addEventListener('scroll', changeColor);
  }


  return (
    <div className={color ? 'sticky bg-[#161410] top-0 z-50 duration-300 py-1' : 'pt-0 duration-300'}>
      <div className="max-w-[1620px] mx-auto 2xl:px-28 xl:px-28 md:px-10 sm:px-2 px-4">
        <div className="w-full top-0 left-0 z-10">
          <div className={`md:flex justify-between items-center ${color ? 'py-3' : 'py-7'}`}>

            <Link to="home" smooth={true} offset={-30} duration={600} className=" text-white text-[24px] flex items-center cursor-pointer">
              <img src={logo} alt="Logo" className="w-auto mr-3 ml-5 md:ml-0" />
              <p>$EGOM</p>
            </Link>

            <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
              {
                open ? <IoClose className="text-[#858238]" /> : <IoMenu className="text-[#858238]" />
              }
            </div>

            <ul className={`md:flex md:items-center md:py-3 pt-5 pb-7 md:space-x-5 xl:space-x-8 2xl:space-x-10 space-y-4 md:space-y-0 absolute md:static md:z-auto z-[-1px] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-linear opacity-0 md:opacity-100 rounded-[5px] ${open ? 'top-[65px] opacity-100 bg-[#2c281d]' : 'top-[-490px] bg-transparent'}`}>

              <li>
                <Link to="home" smooth={true} offset={-30} duration={600} className={`text-[18px] font-semibold uppercase cursor-pointer ${activeLink === "home" ? 'bg-clip-text text-transparent bg-gradient-to-r from-[#D1CB18] to-[#E77962] hover:from-[#D1CB18] hover:to-[#E77962]' : 'bg-clip-text text-transparent bg-gradient-to-r from-[#D8D8D8] to-[#D8D8D8] hover:from-[#D1CB18] hover:to-[#E77962] duration-300'}`} onClick={() => setActiveLink("home")}>Home</Link>
              </li>

              <li>
                <Link to="ecosystem" smooth={true} offset={-90} duration={600} className={`text-[18px] font-semibold uppercase cursor-pointer ${activeLink === "ecosystem" ? 'bg-clip-text text-transparent bg-gradient-to-r from-[#D1CB18] to-[#E77962] hover:from-[#D1CB18] hover:to-[#E77962]' : 'bg-clip-text text-transparent bg-gradient-to-r from-[#D8D8D8] to-[#D8D8D8] hover:from-[#D1CB18] hover:to-[#E77962] duration-300'}`} onClick={() => setActiveLink("ecosystem")}>Eco system</Link>
              </li>

              <li>
                <Link to="tokenomics" smooth={true} offset={-60} duration={600} className={`text-[18px] font-semibold uppercase cursor-pointer ${activeLink === "tokenomics" ? 'bg-clip-text text-transparent bg-gradient-to-r from-[#D1CB18] to-[#E77962] hover:from-[#D1CB18] hover:to-[#E77962]' : 'bg-clip-text text-transparent bg-gradient-to-r from-[#D8D8D8] to-[#D8D8D8] hover:from-[#D1CB18] hover:to-[#E77962] duration-300'}`} onClick={() => setActiveLink("tokenomics")}>Tokenomics</Link>
              </li>

              <div className="block md:hidden">
                <div className="md:flex items-center">
                  <div className="p-[1px] bg-gradient-to-r from-[#D1CB18] to-[#E77962] rounded-[30px] mr-10 w-fit">
                    <button className="text-[#fff] bg-[#1c1811] hover:bg-[#352d20] 2xl:text-[18px] px-14 2xl:px-7 py-[10px] md:py-[15px] rounded-[30px]">Buy Now</button>
                  </div>

                  <div className="bg-gradient-to-r from-[#D1CB18] to-[#E77962] hover:from-[#e7e01a] hover:to-[#fa8168] rounded-[30px] w-fit mt-5 md:mt-0">
                    <button className="text-[#0A0E0D] 2xl:text-[18px] px-6 2xl:px-7 py-[10px] md:py-[15px] rounded-[30px]">connect Wallet</button>
                  </div>
                </div>
              </div>
            </ul>

            <div className="md:block hidden">
              <div className="flex items-center">
                <div className="p-[1px] bg-gradient-to-r from-[#D1CB18] to-[#E77962] rounded-[30px] mr-10">
                  <button className="text-[#fff] bg-[#1c1811] hover:bg-[#352d20] 2xl:text-[18px] px-6 2xl:px-7 py-[15px] rounded-[30px]">Buy Now</button>
                </div>

                <div className="bg-gradient-to-r from-[#D1CB18] to-[#E77962] hover:from-[#e7e01a] hover:to-[#fa8168] rounded-[30px]">
                  <button className="text-[#0A0E0D] 2xl:text-[18px] px-6 2xl:px-7 py-[15px] rounded-[30px]">connect Wallet</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
