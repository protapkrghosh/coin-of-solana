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
          <div className='pb-[50px]'>
            <p className='text-[#FFF] text-[66px] leading-[79.2px] text-center'>ECOSYSTEM</p>

            <div>
              <img className='mt-[162px] 2xl:w-[75%] xl:w-[70%] lg:w-[63%] mx-auto 2xl:ml-[97px] xl:ml-[97px] lg:ml-[80px]' src={ecoBgImg} alt="image" />

              {/* left side section */}
              <div className='relative'>
                {/* left side card 1 */}



                <div className='lg:absolute lg:max-w-[101.092px] 2xl:bottom-[445px] xl:bottom-[328px] lg:bottom-[224px] lg:left-[1px]'>
                  <p className='text-[#FFF] text-[20px] leading-[32px] text-center mb-[15px]'>DEX</p>
                  <div className='ecoborderleft xl:w-[101px] lg:w-[80px] xl:h-[112px] lg:h-[80px] flex justify-center items-center'>
                    <img className='xl:w-auto lg:w-[40px]' src={ecoBgImgleftIcon1} alt="" />
                  </div>
                </div>

                <div className='lg:absolute lg:max-w-[101.092px] 2xl:bottom-[200px] xl:bottom-[140px] lg:bottom-[92px] lg:left-[1px]'>
                  <p className='text-[#FFF] text-[20px] leading-[32px] text-center mb-[15px]'>Gaming</p>
                  <div className='ecoborderleft xl:w-[101px] lg:w-[80px] xl:h-[112px] lg:h-[80px] flex justify-center items-center'>
                    <img className='xl:w-auto lg:w-[40px]' src={ecoBgImgleftIcon2} alt="" />
                  </div>
                </div>

                <div className='lg:absolute lg:max-w-[101.092px] 2xl:bottom-[-40px] xl:bottom-[-45px] lg:bottom-[-38px] lg:left-[1px]'>
                  <p className='text-[#FFF] text-[20px] leading-[32px] text-center mb-[15px]'>NFT</p>
                  <div className='ecoborderleft xl:w-[101px] lg:w-[80px] xl:h-[112px] lg:h-[80px] flex justify-center items-center'>
                    <img className='xl:w-auto lg:w-[40px]' src={ecoBgImgleftIcon3} alt="" />
                  </div>
                </div>
              </div>


              {/* right side section  */}
              <div className='relative'>
                {/* right side bar card 4 */}



                <div className='lg:absolute 2xl:right-[7px] xl:right-[2px] lg:right-[1px] 2xl:bottom-[442px] xl:bottom-[345px] lg:bottom-[235px]'>
                  <div className='ecoborderRight flex items-center gap-4 pl-[12px] 2xl:w-[262px] 2xl:h-[105px] xl:w-[258px] lg:w-[258px] xl:h-[80px] lg:h-[60px]'>
                    <div className='ecoborderRightIcon flex justify-center items-center 2xl:w-[90px] 2xl:h-[70px] xl:w-[85px] lg:w-[60px] xl:h-[60px] lg:h-[50px]'>
                      <img className='2xl:w-auto xl:w-[35px] lg:w-[30px]' src={ecoBgImgrightIcon1} alt="" />
                    </div>
                    <div>
                      <p className='text-[#FFF] xl:text-[20px] lg:text-[18px] xl:leading-[32px] lg:leading-[20px]'>Community Spaces</p>
                    </div>
                  </div>
                </div>

                <div className='lg:absolute 2xl:right-[7px] xl:right-[2px] lg:right-[1px] 2xl:bottom-[320px] xl:bottom-[250px] lg:bottom-[170px]'>
                  <div className='ecoborderRight flex items-center gap-4 pl-[12px] 2xl:w-[262px] 2xl:h-[105px] xl:w-[258px] lg:w-[258px] xl:h-[80px] lg:h-[60px]'>
                    <div className='ecoborderRightIcon flex justify-center items-center 2xl:w-[90px] 2xl:h-[70px] xl:w-[85px] lg:w-[60px] xl:h-[60px] lg:h-[50px]'>
                      <img className='2xl:w-auto xl:w-[35px] lg:w-[30px]' src={ecoBgImgrightIcon2} alt="" />
                    </div>
                    <div>
                      <p className='text-[#FFF] xl:text-[20px] xl:leading-[32px]'>Socials</p>
                    </div>
                  </div>
                </div>

                <div className='lg:absolute 2xl:right-[7px] xl:right-[2px] lg:right-[1px] 2xl:bottom-[200px] xl:bottom-[155px] lg:bottom-[105px]'>
                  <div className='ecoborderRight flex items-center gap-4 pl-[12px] 2xl:w-[262px] 2xl:h-[105px] xl:w-[258px] lg:w-[258px] xl:h-[80px] lg:h-[60px]'>
                    <div className='ecoborderRightIcon flex justify-center items-center 2xl:w-[90px] 2xl:h-[70px] xl:w-[85px] lg:w-[60px] xl:h-[60px] lg:h-[50px]'>
                      <img className='2xl:w-auto xl:w-[35px] lg:w-[30px]' src={ecoBgImgrightIcon3} alt="" />
                    </div>
                    <div>
                      <p className='text-[#FFF] xl:text-[20px] xl:leading-[32px]'>DeFi</p>
                    </div>
                  </div>
                </div>

                <div className='lg:absolute 2xl:right-[7px] xl:right-[2px] lg:right-[1px] 2xl:bottom-[80px] xl:bottom-[60px] lg:bottom-[40px]'>
                  <div className='ecoborderRight flex items-center gap-4 pl-[12px] 2xl:w-[262px] 2xl:h-[105px] xl:w-[258px] lg:w-[258px] xl:h-[80px] lg:h-[60px]'>
                    <div className='ecoborderRightIcon flex justify-center items-center 2xl:w-[90px] 2xl:h-[70px] xl:w-[85px] lg:w-[60px] xl:h-[60px] lg:h-[50px]'>
                      <img className='2xl:w-auto xl:w-[35px] lg:w-[30px]' src={ecoBgImgrightIcon4} alt="" />
                    </div>
                    <div>
                      <p className='text-[#FFF] xl:text-[20px] xl:leading-[32px]'>NFT</p>
                    </div>
                  </div>
                </div>

                <div className='lg:absolute 2xl:right-[7px] xl:right-[2px] lg:right-[1px] 2xl:bottom-[-40px] xl:bottom-[-35px] lg:bottom-[-25px]'>
                  <div className='ecoborderRight flex items-center gap-4 pl-[12px] 2xl:w-[262px] 2xl:h-[105px] xl:w-[258px] lg:w-[258px] xl:h-[80px] lg:h-[60px]'>
                    <div className='ecoborderRightIcon flex justify-center items-center 2xl:w-[90px] 2xl:h-[70px] xl:w-[85px] lg:w-[60px] xl:h-[60px] lg:h-[50px]'>
                      <img className='2xl:w-auto xl:w-[35px] lg:w-[30px]' src={ecoBgImgrightIcon5} alt="" />
                    </div>
                    <div>
                      <p className='text-[#FFF] xl:text-[20px] xl:leading-[32px]'>Payments</p>
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