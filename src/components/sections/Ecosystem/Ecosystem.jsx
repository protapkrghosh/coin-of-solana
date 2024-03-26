import React from 'react';
import Container from '../Container/Container';
import ecoBgImgleft from '@/assets/ecosystem/Designerpre1.png';
import ecoBgImgright from '@/assets/ecosystem/Designerpre2.png';
import ecoBgImg from '@/assets/ecosystem/Group 8793 (2).png';
import cricleIcon from '@/assets/ecosystem/Group 1171275.png';
import ecoBgImgleftIcon1 from '@/assets/ecosystem/Group1171275166.png';
import ecoBgImgleftIcon2 from '@/assets/ecosystem/Group1171275167.png';
import ecoBgImgleftIcon3 from '@/assets/ecosystem/Group1171275165.png';
import ecoBgImgrightIcon1 from '@/assets/ecosystem/Group.png';
import ecoBgImgrightIcon2 from '@/assets/ecosystem/Group 1171275164.png';
import ecoBgImgrightIcon3 from '@/assets/ecosystem/Vector (1).png';
import ecoBgImgrightIcon4 from '@/assets/ecosystem/Group 1171275168.png';
import ecoBgImgrightIcon5 from '@/assets/ecosystem/Group 1171275169.png';


const Ecosystem = () => {
  return (
    <>
      <div className='bg-gradient-to-r from-[#191610] to-[#191610]'>
        <Container>
          <div className='border'>
            <p className='text-[#FFF] text-[66px] leading-[79.2px] text-center'>ECOSYSTEM</p>

            <div>
              <img className='mt-[162px] 2xl:w-[75%] xl:w-[70%] lg:w-[70%] mx-auto 2xl:ml-[97px] xl:ml-[97px] lg:ml-[97px]' src={ecoBgImg} alt="image" />

              <div className='relative'>
                {/* left side card 2 */}
                <div className='xl:absolute lg:max-w-[101.092px] 2xl:bottom-[440px] xl:bottom-[330px] xl:left-[1px]'>
                  <p className='text-[#FFF] text-[20px] leading-[32px] text-center mb-[15px]'>DEX</p>
                  <div className='ecoborderleft flex justify-center items-center'>
                    <img className='xl:w-auto' src={ecoBgImgleftIcon1} alt="" />
                  </div>
                </div>
              </div>


              <div className='relative'>
                {/* right side bar card 4 */}
                <div className='xl:absolute 2xl:right-[7px] xl:right-[1px] 2xl:bottom-[440px] xl:bottom-[330px]'>
                  <div className='ecoborderRight flex items-center gap-4 pl-[12px]'>
                    <div className='ecoborderRightIcon flex justify-center items-center'>
                      <img className='xl:w-auto' src={ecoBgImgrightIcon4} alt="" />
                    </div>
                    <div>
                      <p className='text-[#FFF] text-[20px] leading-[32px]'>NFT</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </Container>
      </div>
    </>
  );
};

export default Ecosystem;