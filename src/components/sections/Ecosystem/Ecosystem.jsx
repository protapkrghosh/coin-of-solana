import React from 'react';
import Container from '../Container/Container';
import ecoBgImgleft from '@/assets/ecosystem/Designerpre1.png';
import ecoBgImgright from '@/assets/ecosystem/Designerpre2.png';
import ecoBgImg from '@/assets/ecosystem/Group 1171275157.png';
import ecoBgImgleftIcon1 from '@/assets/ecosystem/Group1171275166.png';
import ecoBgImgleftIcon2 from '@/assets/ecosystem/Group1171275167.png';
import ecoBgImgleftIcon3 from '@/assets/ecosystem/Group1171275165.png';
import ecoBgImgrightIcon1 from '@/assets/ecosystem/Group.png';


const Ecosystem = () => {
  return (
    <>
      <Container>
        <div className='border border-white 2xl:relative'>
          <div>
            <p className='text-[#FFF] text-[66px] leading-[79.2px] text-center'>ECOSYSTEM</p>
          </div>

          <div className='2xl:absolute 2xl:left-[90px]'>
            <div className='flex justify-evenly'>
              <img className='2xl:w-auto 2xl:mt-[162px]' src={ecoBgImg} alt="" />
            </div>

            {/* left side card 1 */}
            <div className='2xl:max-w-[101.092px] 2xl:absolute 2xl:bottom-[490px] 2xl:left-[-95px]'>
              <p className='text-[#FFF] text-[20px] leading-[32px] text-center mb-[15px]'>DEX</p>
              <div className='ecoborderleft flex justify-center items-center'>
                <img className='2xl:w-auto' src={ecoBgImgleftIcon1} alt="" />
              </div>
            </div>

            {/* left side card 2 */}
            <div className='2xl:max-w-[101.092px] 2xl:absolute 2xl:bottom-56 2xl:left-[-95px]'>
              <p className='text-[#FFF] text-[20px] leading-[32px] text-center mb-[15px]'>Gaming</p>
              <div className='ecoborderleft flex justify-center items-center'>
                <img className='2xl:w-auto' src={ecoBgImgleftIcon2} alt="" />
              </div>
            </div>

            {/* left side card 3 */}
            <div className='2xl:max-w-[101.092px] 2xl:absolute 2xl:-bottom-10 2xl:left-[-95px]'>
              <p className='text-[#FFF] text-[20px] leading-[32px] text-center mb-[15px]'>NFT</p>
              <div className='ecoborderleft flex justify-center items-center'>
                <img className='2xl:w-auto' src={ecoBgImgleftIcon3} alt="" />
              </div>
            </div>


            {/* right side bar card  */}
            <div className='2xl:absolute 2xl:right-[-250px] 2xl:bottom-[500px]'>
              <div className='ecoborderRight flex items-center gap-4 pl-[12px]'>
                <div className='ecoborderRightIcon flex justify-center items-center'>
                  <img className='2xl:w-auto' src={ecoBgImgrightIcon1} alt="" />
                </div>
                <div>
                  <p className='text-[#FFF] text-[20px] leading-[32px]'>Community Spaces</p>
                </div>
              </div>
            </div>

            {/* right side bar card  */}
            <div className='2xl:absolute 2xl:right-[-250px] 2xl:bottom-[360px]'>
              <div className='ecoborderRight flex items-center gap-4 pl-[12px]'>
                <div className='ecoborderRightIcon flex justify-center items-center'>
                  <img className='2xl:w-auto' src={ecoBgImgrightIcon1} alt="" />
                </div>
                <div>
                  <p className='text-[#FFF] text-[20px] leading-[32px]'>Community Spaces</p>
                </div>
              </div>
            </div>


          </div>
        </div>
      </Container>
    </>
  );
};

export default Ecosystem;







<div className='max-w-[101.092px]'>
  <p className='text-[#FFF] text-[20px] leading-[32px] text-center mb-[15px]'>DEX</p>
  <div className='ecoborderleft flex justify-center items-center'>
    <img className='' src={ecoBgImgleftIcon1} alt="" />
  </div>
</div>