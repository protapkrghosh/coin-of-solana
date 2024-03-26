import React from 'react';
import Container from '../Container/Container';
import ecoBgImgleft from '@/assets/ecosystem/Designerpre1.png';
import ecoBgImgright from '@/assets/ecosystem/Designerpre2.png';
import ecoBgImg from '@/assets/ecosystem/Group 1171275157.png';


const Ecosystem = () => {
  return (
    <>
      <Container>

        <div>
          <p className='text-[#FFF] text-[66px] leading-[79.2px] text-center'>ECOSYSTEM</p>
        </div>

        <div>
          <img src={ecoBgImg} alt="" />
          <div>
            <p className='text-[#FFF] text-[20px] leading-[32px]'>DEX</p>

          </div>
        </div>
      </Container>
    </>
  );
};

export default Ecosystem;