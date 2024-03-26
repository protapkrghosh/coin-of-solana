import React from 'react';
import Container from '../Container/Container';
import ecoBgImgleft from '@/assets/ecosystem/Designerpre1.png';
import ecoBgImgright from '@/assets/ecosystem/Designerpre2.png';
import ecoBgImg from '@/assets/ecosystem/Group 1171275157.png';
import ecoBgImgleftIcon1 from '@/assets/ecosystem/Group 1171275165.png';


const Ecosystem = () => {
  return (
    <>
      <Container>
        <div className='border border-white 2xl:relative'>
          <div>
            <p className='text-[#FFF] text-[66px] leading-[79.2px] text-center'>ECOSYSTEM</p>
          </div>

          <div>
            <div className='flex justify-evenly'>
              <img className='2xl:mt-[162px]' src={ecoBgImg} alt="" />
            </div>

            <div className='2xl:max-w-[101.092px] 2xl:absolute 2xl:-bottom-10 2xl:left-7'>
              <p className='text-[#FFF] text-[20px] leading-[32px] text-center mb-[15px]'>DEX</p>
              <div className='ecoborderleft flex justify-center items-center'>
                <img className='2xl:w-auto' src={ecoBgImgleftIcon1} alt="" />
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