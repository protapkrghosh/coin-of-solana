import forgeImg from '@/assets/banner/Designer.png';
import bannerImg from '@/assets/banner/Frame 65.png';
import Container from '../Container/Container';
import { FaXTwitter, FaDiscord } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";

const Banner = () => {
  return (
    <div className='bg-gradient-to-r from-[#191610] to-[#191610]'>
      <Container>
        <div style={{ backgroundImage: `url(${forgeImg})` }} className='bg-no-repeat bg-left pt-52 pb-16 -mt-[140px] lg:-mt-[125px]'>
          <div className='flex flex-col-reverse lg:flex-row justify-between items-center gap-0'>
            <div className='w-full lg:w-[60%] xl:w-[55%] 2xl:w-[52%] mt-10 lg:mt-0'>
              <div>
                <p className='text-white text-[34px] md:text-[50px] xl:text-[56px] 2xl:text-[64px] font-normal -mb-2 md:-mb-5'>The Community</p>

                <h1 className='text-[34px] md:text-[50px] lg:text-[48px] xl:text-[56px] 2xl:text-[64px] font-bold'><span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D1CB18] to-[#E77962]">Coin of Solana </span></h1>

                <p className='text-[#CBC2C2] text-[15px] lg:text-[16px] xl:text-[18px] font-normal mt-5 xl:mt-8 mb-8 xl:mb-14'>The new token PERRY v2 is here to make memecoins great again. The most memeable memecoin in existence. Tje PEPE have had their day, it’s time for PERRY to take reign!</p>

                <div className='w-fit flex gap-x-5 xl:gap-x-8'>
                  <a href="" className='w-[70px] h-[70px]'>
                    <div className='p-4 xl:p-5 bg-gradient-to-r from-[#D1CB18] to-[#E77962] hover:from-[#beb915] hover:to-[#cc6a56] rounded-full w-fit'>
                      <FaXTwitter className='text-[30px] text-white' />
                    </div>
                  </a>

                  <a href="" className='w-[70px] h-[70px]'>
                    <div className='p-4 xl:p-5 bg-gradient-to-r from-[#D1CB18] to-[#E77962] hover:from-[#beb915] hover:to-[#cc6a56] rounded-full w-fit'>
                      <FaTelegramPlane className='text-[30px] text-white' />
                    </div>
                  </a>

                  <a href="" className='w-[70px] h-[70px]'>
                    <div className='p-4 xl:p-5 bg-gradient-to-r from-[#D1CB18] to-[#E77962] hover:from-[#beb915] hover:to-[#cc6a56] rounded-full w-fit'>
                      <FaDiscord className='text-[30px] text-white' />
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Banner Image */}
            <div className='w-full lg:w-[40%] xl:w-[45%] 2xl:w-[48%] lg:-mr-10 xl:-mr-16 2xl:-mr-10'>
              <img src={bannerImg} alt="Image" className='w-[400px] xl:w-[500px] 2xl:w-auto 2xl:scale-105 mx-auto lg:mx-0' />
            </div>
          </div>
        </div>
      </Container >
    </div >
  );
};

export default Banner;
