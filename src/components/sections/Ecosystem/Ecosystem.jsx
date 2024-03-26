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
      <div className='bg-gradient-to-r from-[#191610] to-[#191610]' id='ecosystem'>
        <Container>
          <div className='border'>
            <p className='text-[#FFF] text-[66px] leading-[79.2px] text-center'>ECOSYSTEM</p>

            <div>
              <img className='mt-[162px] 2xl:w-[75%] xl:w-[70%] lg:w-[70%] mx-auto 2xl:ml-[97px] xl:ml-[97px] lg:ml-[80px]' src={ecoBgImg} alt="image" />

              {/* left side section  */}
              <div className='relative'>
                {/* left side card 1 */}



                <div className='lg:absolute lg:max-w-[101.092px] 2xl:bottom-[-40px] xl:bottom-[-45px] lg:bottom-[250px] lg:left-[1px]'>
                  <p className='text-[#FFF] text-[20px] leading-[32px] text-center mb-[15px]'>DEX</p>
                  <div className='ecoborderleft xl:w-[101px] lg:w-[80px] xl:h-[112px] lg:h-[80px] flex justify-center items-center'>
                    <img className='xl:w-auto lg:w-[40px]' src={ecoBgImgleftIcon1} alt="" />
                  </div>
                </div>

                <div className='lg:absolute lg:max-w-[101.092px] 2xl:bottom-[-40px] xl:bottom-[-45px] lg:bottom-[105px] lg:left-[1px]'>
                  <p className='text-[#FFF] text-[20px] leading-[32px] text-center mb-[15px]'>Gaming</p>
                  <div className='ecoborderleft xl:w-[101px] lg:w-[80px] xl:h-[112px] lg:h-[80px] flex justify-center items-center'>
                    <img className='xl:w-auto lg:w-[40px]' src={ecoBgImgleftIcon2} alt="" />
                  </div>
                </div>

                <div className='lg:absolute lg:max-w-[101.092px] 2xl:bottom-[-40px] xl:bottom-[-45px] lg:bottom-[-35px] lg:left-[1px]'>
                  <p className='text-[#FFF] text-[20px] leading-[32px] text-center mb-[15px]'>NFT</p>
                  <div className='ecoborderleft xl:w-[101px] lg:w-[80px] xl:h-[112px] lg:h-[80px] flex justify-center items-center'>
                    <img className='xl:w-auto lg:w-[40px]' src={ecoBgImgleftIcon3} alt="" />
                  </div>
                </div>
              </div>


              {/* right side section  */}
              <div className='relative'>
                {/* right side bar card 4 */}
                <div className='lg:absolute 2xl:right-[7px] xl:right-[2px] 2xl:bottom-[-40px] xl:bottom-[342px]'>
                  <div className='ecoborderRight flex items-center gap-4 pl-[12px] 2xl:w-[262px] 2xl:h-[110px] xl:w-[258px] xl:h-[80px]'>
                    <div className='ecoborderRightIcon flex justify-center items-center 2xl:w-[105px] 2xl:h-[86px] xl:w-[85px] xl:h-[60px]'>
                      <img className='2xl:w-auto xl:w-[35px]' src={ecoBgImgrightIcon1} alt="" />
                    </div>
                    <div>
                      <p className='text-[#FFF] text-[20px] leading-[32px]'>Community Spaces</p>
                    </div>
                  </div>
                </div>

                <div className='lg:absolute 2xl:right-[7px] xl:right-[1px] 2xl:bottom-[-40px] xl:bottom-[248px]'>
                  <div className='ecoborderRight flex items-center gap-4 pl-[12px] 2xl:w-[262px] 2xl:h-[110px] xl:w-[258px] xl:h-[80px]'>
                    <div className='ecoborderRightIcon flex justify-center items-center 2xl:w-[105px] 2xl:h-[86px] xl:w-[85px] xl:h-[60px]'>
                      <img className='2xl:w-auto xl:w-[35px]' src={ecoBgImgrightIcon1} alt="" />
                    </div>
                    <div>
                      <p className='text-[#FFF] text-[20px] leading-[32px]'>Community Spaces</p>
                    </div>
                  </div>
                </div>

                <div className='lg:absolute 2xl:right-[7px] xl:right-[1px] 2xl:bottom-[-40px] xl:bottom-[155px]'>
                  <div className='ecoborderRight flex items-center gap-4 pl-[12px] 2xl:w-[262px] 2xl:h-[110px] xl:w-[258px] xl:h-[80px]'>
                    <div className='ecoborderRightIcon flex justify-center items-center 2xl:w-[105px] 2xl:h-[86px] xl:w-[85px] xl:h-[60px]'>
                      <img className='2xl:w-auto xl:w-[35px]' src={ecoBgImgrightIcon1} alt="" />
                    </div>
                    <div>
                      <p className='text-[#FFF] text-[20px] leading-[32px]'>Community Spaces</p>
                    </div>
                  </div>
                </div>

                <div className='lg:absolute 2xl:right-[7px] xl:right-[1px] 2xl:bottom-[-40px] xl:bottom-[62px]'>
                  <div className='ecoborderRight flex items-center gap-4 pl-[12px] 2xl:w-[262px] 2xl:h-[110px] xl:w-[258px] xl:h-[80px]'>
                    <div className='ecoborderRightIcon flex justify-center items-center 2xl:w-[105px] 2xl:h-[86px] xl:w-[85px] xl:h-[60px]'>
                      <img className='2xl:w-auto xl:w-[35px]' src={ecoBgImgrightIcon1} alt="" />
                    </div>
                    <div>
                      <p className='text-[#FFF] text-[20px] leading-[32px]'>Community Spaces</p>
                    </div>
                  </div>
                </div>

                <div className='lg:absolute 2xl:right-[7px] xl:right-[1px] 2xl:bottom-[-40px] xl:bottom-[-30px]'>
                  <div className='ecoborderRight flex items-center gap-4 pl-[12px] 2xl:w-[262px] 2xl:h-[110px] xl:w-[258px] xl:h-[80px]'>
                    <div className='ecoborderRightIcon flex justify-center items-center 2xl:w-[105px] 2xl:h-[86px] xl:w-[85px] xl:h-[60px]'>
                      <img className='2xl:w-auto xl:w-[35px]' src={ecoBgImgrightIcon1} alt="" />
                    </div>
                    <div>
                      <p className='text-[#FFF] text-[20px] leading-[32px]'>Community Spaces</p>
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