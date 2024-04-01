import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import '@solana/wallet-adapter-react-ui/styles.css';
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/banner/Group49.png"
// import SolContext from "@/shared/SolContext/SolContext"

function DashNavBarSol() {

  const [color, setColor] = useState(false);
  return (
    <div className={color ? 'sticky bg-[#161410] top-0 z-50 duration-300 py-1' : 'pt-0 duration-300'}>
      <div className="max-w-[1620px] mx-auto 2xl:px-28 xl:px-28 md:px-10 sm:px-2 px-4">
        <div className="w-full top-0 left-0 z-10">
          <div className={`md:flex justify-between items-center ${color ? 'py-3' : 'py-7'}`}>

            <Link to="/" className=" text-white text-[24px] flex items-center cursor-pointer">
              <img src={logo} alt="Logo" className="w-auto mr-3 ml-5 md:ml-0" />
              <p>$EGOM</p>
            </Link>

            <div className="md:block hidden">
              <div className="flex items-center">
                <div>
                      <WalletMultiButton />
                </div>

                {/* <div className="bg-gradient-to-r from-[#D1CB18] to-[#E77962] hover:from-[#e7e01a] hover:to-[#fa8168] rounded-[30px]">
                  <button className="text-[#0A0E0D] 2xl:text-[18px] px-6 2xl:px-7 py-[15px] rounded-[30px]">Connect Wallet</button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashNavBarSol;