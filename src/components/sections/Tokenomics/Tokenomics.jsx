import Container from '../Container/Container';
import forgeImg1 from '@/assets/tokenomics/Designer1.png';
import forgeImg2 from '@/assets/tokenomics/Designer2.png';
import forgeImg3 from '@/assets/tokenomics/Designer3.png';
import forgeImg4 from '@/assets/tokenomics/Designer4.png';
import forgeImg5 from '@/assets/tokenomics/Designer5.png';

const Tokenomics = () => {
  return (
    <div className='bg-gradient-to-r from-[#191610] to-[#191610]'>
      <Container>
        <div style={{ backgroundImage: `url(${forgeImg1})` }} className='bg-no-repeat bg-top'>
          <p className='text-[#CCC2C2] text-[18px] text-center font-normal 2xl:w-[87%] mx-auto'>Why EGOM ?  $EGOM is like the coolest meme coin ever, created by a bunch of friends who love jokes and funny stuff. It's not just about making money, it's about having fun and being part of a cool community. Having some $EGOM your life just makes everything better!</p>

          {/* Tokenomics content */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <div>
              <h3 className='text-[#fff] text-[50px] 2xl:text-[55px] font-semibold'>Tokenomics</h3>

              <div className='space-y-10'>
                {/* LP */}
                <div className='flex items-center'>
                  <div className='w-24 h-10 border-2 border-[#D6B829] rounded-full mr-5' />
                  <p className='text-[#CCC2C2] text-[24px] font-normal'>Lp</p>
                </div>

                {/* Presale */}
                <div className='flex items-center'>
                  <div className='w-24 h-10 border-2 border-[#E48259] rounded-full mr-5' />
                  <p className='text-[#CCC2C2] text-[24px] font-normal'>Presale</p>
                </div>

                {/* Marketing  */}
                <div className='flex items-center'>
                  <div className='w-24 h-10 border-2 border-[#B1B21B] rounded-full mr-5' />
                  <p className='text-[#CCC2C2] text-[24px] font-normal'>Marketing </p>
                </div>

                {/* Future team */}
                <div className='flex items-center'>
                  <div className='w-24 h-10 border-2 border-[#71D420] rounded-full mr-5' />
                  <p className='text-[#CCC2C2] text-[24px] font-normal'>CEX and Future team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Tokenomics;
