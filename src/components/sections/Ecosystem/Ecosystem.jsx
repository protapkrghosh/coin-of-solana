import React from 'react';
import Container from '../Container/Container';
import ecoBgImgleft from '@/assets/ecosystem/Designerpre1.png';
import ecoBgImgright from '@/assets/ecosystem/Designerpre2.png';
import ecoBgImg from '@/assets/ecosystem/Group 8793 (2).png';
import ecoBgImgRotade from '@/assets/ecosystem/Group 1171275171.png';
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
      <div className='bg-gradient-to-r from-[#191610] to-[#191610] overflow-hidden' id='ecosystem'>
        <Container>
          <div className='pb-[50px]'>
            <p className='text-[#FFF] lg:text-[66px] md:text-[60px] text-[48px] lg:leading-[79.2px] md:leading-[79.2px] leading-[79.2px] text-center'>ECOSYSTEM</p>

            <div>
              {/*------------------ large device section ------------------ */}

              <div className='hidden lg:block'>
                <div>
                  <img className='mt-[162px] 2xl:w-[75%] xl:w-[70%] lg:w-[63%] mx-auto 2xl:ml-[97px] xl:ml-[97px] lg:ml-[80px]' src={ecoBgImg} alt="image" />

                  {/* left side section */}
                  <div className='relative'>
                    {/* left side card 1 */}



                    <div className='lg:absolute lg:max-w-[101.092px] 2xl:bottom-[445px] xl:bottom-[328px] lg:bottom-[224px] lg:left-[1px]'>
                      <p className='text-[#FFF] text-[20px] leading-[32px] text-center mb-[15px]'>DEX</p>
                      <div className='ecoborderleft lg:rounded-[20px] xl:w-[101px] lg:w-[80px] xl:h-[112px] lg:h-[80px] flex justify-center items-center'>
                        <img className='xl:w-auto lg:w-[40px]' src={ecoBgImgleftIcon1} alt="" />
                      </div>
                    </div>

                    <div className='lg:absolute lg:max-w-[101.092px] 2xl:bottom-[200px] xl:bottom-[140px] lg:bottom-[92px] lg:left-[1px]'>
                      <p className='text-[#FFF] text-[20px] leading-[32px] text-center mb-[15px]'>Gaming</p>
                      <div className='ecoborderleft lg:rounded-[20px] xl:w-[101px] lg:w-[80px] xl:h-[112px] lg:h-[80px] flex justify-center items-center'>
                        <img className='xl:w-auto lg:w-[40px]' src={ecoBgImgleftIcon2} alt="" />
                      </div>
                    </div>

                    <div className='lg:absolute lg:max-w-[101.092px] 2xl:bottom-[-40px] xl:bottom-[-45px] lg:bottom-[-38px] lg:left-[1px]'>
                      <p className='text-[#FFF] text-[20px] leading-[32px] text-center mb-[15px]'>NFT</p>
                      <div className='ecoborderleft lg:rounded-[20px] xl:w-[101px] lg:w-[80px] xl:h-[112px] lg:h-[80px] flex justify-center items-center'>
                        <img className='xl:w-auto lg:w-[40px]' src={ecoBgImgleftIcon3} alt="" />
                      </div>
                    </div>
                  </div>


                  {/* right side section  */}
                  <div className='relative'>
                    {/* right side bar card 4 */}



                    <div className='lg:absolute 2xl:right-[7px] xl:right-[2px] lg:right-[1px] 2xl:bottom-[442px] xl:bottom-[345px] lg:bottom-[235px]'>
                      <div className='ecoborderRight lg:rounded-[20px] flex items-center gap-4 pl-[12px] 2xl:w-[262px] 2xl:h-[105px] xl:w-[258px] lg:w-[258px] xl:h-[80px] lg:h-[60px]'>
                        <div className='ecoborderRightIcon lg:rounded-[20px] flex justify-center items-center 2xl:w-[125px] 2xl:h-[70px] xl:w-[115px] lg:w-[74px] xl:h-[60px] lg:h-[50px]'>
                          <img className='2xl:w-auto xl:w-[35px] lg:w-[30px]' src={ecoBgImgrightIcon1} alt="" />
                        </div>
                        <div>
                          <p className='text-[#FFF] xl:text-[20px] lg:text-[18px] xl:leading-[32px] lg:leading-[20px]'>Community Spaces</p>
                        </div>
                      </div>
                    </div>

                    <div className='lg:absolute 2xl:right-[7px] xl:right-[2px] lg:right-[1px] 2xl:bottom-[320px] xl:bottom-[250px] lg:bottom-[170px]'>
                      <div className='ecoborderRight lg:rounded-[20px] flex items-center gap-4 pl-[12px] 2xl:w-[262px] 2xl:h-[105px] xl:w-[258px] lg:w-[258px] xl:h-[80px] lg:h-[60px]'>
                        <div className='ecoborderRightIcon lg:rounded-[20px] flex justify-center items-center 2xl:w-[80px] 2xl:h-[70px] xl:w-[75px] lg:w-[60px] xl:h-[60px] lg:h-[50px]'>
                          <img className='2xl:w-auto xl:w-[35px] lg:w-[30px]' src={ecoBgImgrightIcon2} alt="" />
                        </div>
                        <div>
                          <p className='text-[#FFF] xl:text-[20px] xl:leading-[32px]'>Socials</p>
                        </div>
                      </div>
                    </div>

                    <div className='lg:absolute 2xl:right-[7px] xl:right-[2px] lg:right-[1px] 2xl:bottom-[200px] xl:bottom-[155px] lg:bottom-[105px]'>
                      <div className='ecoborderRight lg:rounded-[20px] flex items-center gap-4 pl-[12px] 2xl:w-[262px] 2xl:h-[105px] xl:w-[258px] lg:w-[258px] xl:h-[80px] lg:h-[60px]'>
                        <div className='ecoborderRightIcon lg:rounded-[20px] flex justify-center items-center 2xl:w-[80px] 2xl:h-[70px] xl:w-[75px] lg:w-[60px] xl:h-[60px] lg:h-[50px]'>
                          <img className='2xl:w-auto xl:w-[35px] lg:w-[30px]' src={ecoBgImgrightIcon3} alt="" />
                        </div>
                        <div>
                          <p className='text-[#FFF] xl:text-[20px] xl:leading-[32px]'>DeFi</p>
                        </div>
                      </div>
                    </div>

                    <div className='lg:absolute 2xl:right-[7px] xl:right-[2px] lg:right-[1px] 2xl:bottom-[80px] xl:bottom-[60px] lg:bottom-[40px]'>
                      <div className='ecoborderRight lg:rounded-[20px] flex items-center gap-4 pl-[12px] 2xl:w-[262px] 2xl:h-[105px] xl:w-[258px] lg:w-[258px] xl:h-[80px] lg:h-[60px]'>
                        <div className='ecoborderRightIcon lg:rounded-[20px] flex justify-center items-center 2xl:w-[80px] 2xl:h-[70px] xl:w-[75px] lg:w-[60px] xl:h-[60px] lg:h-[50px]'>
                          <img className='2xl:w-auto xl:w-[35px] lg:w-[30px]' src={ecoBgImgrightIcon4} alt="" />
                        </div>
                        <div>
                          <p className='text-[#FFF] xl:text-[20px] xl:leading-[32px]'>NFT</p>
                        </div>
                      </div>
                    </div>

                    <div className='lg:absolute 2xl:right-[7px] xl:right-[2px] lg:right-[1px] 2xl:bottom-[-40px] xl:bottom-[-35px] lg:bottom-[-25px]'>
                      <div className='ecoborderRight lg:rounded-[20px] flex items-center gap-4 pl-[12px] 2xl:w-[262px] 2xl:h-[105px] xl:w-[258px] lg:w-[258px] xl:h-[80px] lg:h-[60px]'>
                        <div className='ecoborderRightIcon lg:rounded-[20px] flex justify-center items-center 2xl:w-[80px] 2xl:h-[70px] xl:w-[75px] lg:w-[60px] xl:h-[60px] lg:h-[50px]'>
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

              {/*------------------ small device section ------------------ */}
              <div className='block lg:hidden'>
                <div className='md:mt-[455px] mt-[400px] md:mb-[400px] mb-[320px] md:ml-[-220px] ml-[-185px]'>
                  <div className='md:w-[1100px] w-[760px] text-center'><img className='rotate-90' src={ecoBgImg} alt="" /></div>
                </div>


                {/* left side card 1 */}
                <div className='absolute md:bottom-[-450px] bottom-[-285px] md:left-[575px] left-[10px]'>
                  <p className='text-[#FFF] text-[20px] leading-[32px] text-center mb-[15px]'>nft</p>
                  <div className='ecoborderleft md:h-[95px] h-[85px] md:w-[90px] w-[80px] flex justify-center items-center rounded-[15px]'>
                    <img className='md:w-[70%] w-[50%]' src={ecoBgImgleftIcon3} alt="" />
                  </div>
                </div>

                <div className='absolute md:bottom-[-450px] bottom-[-285px] md:left-[320px] left-[170px]'>
                  <p className='text-[#FFF] text-[20px] leading-[32px] text-center mb-[15px]'>Gaming</p>
                  <div className='ecoborderleft md:h-[95px] h-[85px] md:w-[90px] w-[80px] flex justify-center items-center rounded-[15px]'>
                    <img className='md:w-[70%] w-[50%]' src={ecoBgImgleftIcon2} alt="" />
                  </div>
                </div>

                <div className='absolute md:bottom-[-450px] bottom-[-285px] md:left-[75px] left-[340px]'>
                  <p className='text-[#FFF] text-[20px] leading-[32px] text-center mb-[15px]'>dex</p>
                  <div className='ecoborderleft md:h-[95px] h-[85px] md:w-[90px] w-[80px] flex justify-center items-center rounded-[15px]'>
                    <img className='md:w-[70%] w-[50%]' src={ecoBgImgleftIcon1} alt="" />
                  </div>
                </div>


                {/* right side  */}
                <div className='absolute md:left-[77px] left-[7px] md:bottom-[-1677px] bottom-[-1192px]'>
                  <div className='ecoborderRightSmall px-[9px] py-[15px] md:w-[94px] w-[75px] md:h-[155px] h-[155px] rounded-[20px]'>
                    <div className='ecoborderRightIconSmall flex justify-center items-center md:w-[75px] w-[56px] md:h-[75px] h-[55px] rounded-[20px]'>
                      <img className='md:w-[40px] w-[32px]' src={ecoBgImgrightIcon5} alt="" />
                    </div>
                    <div>
                      <p className='text-[#FFF] text-center text-[10px]  mt-[20px]'>Payments</p>
                    </div>
                  </div>
                </div>

                <div className='absolute md:left-[199px] left-[90px] md:bottom-[-1677px] bottom-[-1192px]'>
                  <div className='ecoborderRightSmall px-[9px] py-[15px] md:w-[94px] w-[75px] md:h-[155px] h-[155px] rounded-[20px]'>
                    <div className='ecoborderRightIconSmall flex justify-center items-center md:w-[75px] w-[56px] md:h-[75px] h-[55px] rounded-[20px]'>
                      <img className='md:w-[40px] w-[32px]' src={ecoBgImgrightIcon4} alt="" />
                    </div>
                    <div>
                      <p className='text-[#FFF] text-center text-[10px]  mt-[20px]'>NFT</p>
                    </div>
                  </div>
                </div>

                <div className='absolute md:left-[323px] left-[175px] md:bottom-[-1677px] bottom-[-1192px]'>
                  <div className='ecoborderRightSmall px-[9px] py-[15px] md:w-[94px] w-[75px] md:h-[155px] h-[155px] rounded-[20px]'>
                    <div className='ecoborderRightIconSmall flex justify-center items-center md:w-[75px] w-[56px] md:h-[75px] h-[55px] rounded-[20px]'>
                      <img className='md:w-[40px] w-[32px]' src={ecoBgImgrightIcon3} alt="" />
                    </div>
                    <div>
                      <p className='text-[#FFF] text-center text-[10px]  mt-[20px]'>DeFi</p>
                    </div>
                  </div>
                </div>

                <div className='absolute md:left-[445px] left-[260px] md:bottom-[-1677px] bottom-[-1192px]'>
                  <div className='ecoborderRightSmall px-[9px] py-[15px] md:w-[94px] w-[75px] md:h-[155px] h-[155px] rounded-[20px]'>
                    <div className='ecoborderRightIconSmall flex justify-center items-center md:w-[75px] w-[56px] md:h-[75px] h-[55px] rounded-[20px]'>
                      <img className='md:w-[40px] w-[32px]' src={ecoBgImgrightIcon2} alt="" />
                    </div>
                    <div>
                      <p className='text-[#FFF] text-center text-[10px]  mt-[20px]'>Socials</p>
                    </div>
                  </div>
                </div>

                <div className='absolute md:left-[572px] left-[345px] md:bottom-[-1677px] bottom-[-1192px]'>
                  <div className='ecoborderRightSmall px-[9px] py-[15px] md:w-[94px] w-[75px] md:h-[155px] h-[155px] rounded-[20px]'>
                    <div className='ecoborderRightIconSmall flex justify-center items-center md:w-[75px] w-[56px] md:h-[75px] h-[55px] rounded-[20px]'>
                      <img className='md:w-[40px] w-[32px]' src={ecoBgImgrightIcon1} alt="" />
                    </div>
                    <div>
                      <p className='text-[#FFF] text-center md:text-[10px] text-[9px]  mt-[20px]'>Community Spaces</p>
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