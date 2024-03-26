import Container from '../Container/Container';
import logo from "@/assets/banner/Group49.png"
import forgeImg1 from '@/assets/tokenomics/Designer1.png';
import forgeImg2 from '@/assets/tokenomics/Designer2.png';
import forgeImg3 from '@/assets/tokenomics/Designer3.png';
import forgeImg4 from '@/assets/tokenomics/Designer4.png';
import forgeImg5 from '@/assets/tokenomics/Designer5.png';
import chartImg from '@/assets/tokenomics/Group81.png';
import arrowIcon from '@/assets/tokenomics/arroup.svg';
import { IoIosArrowUp } from "react-icons/io";
import React, { PureComponent } from 'react';
import { Link } from 'react-scroll';
import ScrollToTop from 'react-scroll-to-top';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const Tokenomics = () => {
  // const data = [
  //   { name: 'Group A', value: 450 },
  //   { name: 'Group B', value: 130 },
  //   { name: 'Group C', value: 130 },
  //   { name: 'Group D', value: 500 },
  // ];

  // const COLORS = ['#D3C31F', '#71D420', '#B1B21B', '#D49920'];

  // const RADIAN = Math.PI / 180;
  // const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  //   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  //   const x = cx + radius * Math.cos(-midAngle * RADIAN);
  //   const y = cy + radius * Math.sin(-midAngle * RADIAN);

  //   return (
  //     <text x={x} y={y} fill="#000" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
  //       {`${(percent * 100).toFixed(0)}%`}
  //     </text>
  //   );
  // };

  return (
    <div className='bg-gradient-to-r from-[#191610] to-[#191610] -mt-1 pb-10 2xl:pb-16'>
      <Container>
        <div>

          <div className='flex justify-center -mb-[450px]'>
            <img src={forgeImg1} alt="Image" className='w-[450px] mt-10 mr-12' />
          </div>

          <div className='bg-no-repeat bg-top'>
            <p className='text-[#CCC2C2] text-[18px] text-center font-normal 2xl:w-[87%] mx-auto pt-14'>Why EGOM ?  $EGOM is like the coolest meme coin ever, created by a bunch of friends who love jokes and funny stuff. It's not just about making money, it's about having fun and being part of a cool community. Having some $EGOM your life just makes everything better!</p>

            {/* Tokenomics content */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-36 pb-36'>
              {/* Token content */}
              <div>
                <h3 className='text-[#fff] text-[50px] 2xl:text-[55px] font-semibold mb-8'>Tokenomics</h3>

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

              {/* chart */}
              <div className=''>
                {/* <ResponsiveContainer width="100%" height="100%">
                <PieChart width={600} height={600}>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={190}
                    fill="#8884d8"
                    dataKey="value"
                    className='text-[24px]'
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer> */}
                <img src={chartImg} alt="Image" className='w-[90%]' />
              </div>


              {/* Gradient button */}
              <div className='space-y-8'>
                <div className='p-[1px] bg-gradient-to-r from-[#D1CB18] to-[#e7786209] rounded-full'>
                  <p className='text-white text-[23px] py-4 px-6 bg-[#191610] rounded-full'>Token supply 1,000,000,000</p>
                </div>

                <div className='p-[1px] bg-gradient-to-r from-[#d1cb1809] to-[#E77962] rounded-full w-[82%]'>
                  <p className='text-white text-[23px] py-4 px-6 bg-[#191610] rounded-full'>45% <span className='text-[#bbb]'>of Token go to LP</span></p>
                </div>

                <div className='p-[1px] bg-gradient-to-r from-[#D1CB18] to-[#e7786209] rounded-full'>
                  <p className='text-white text-[23px] py-4 px-6 bg-[#191610] rounded-full'>45% <span className='text-[#bbb]'>of token go to Presale</span></p>
                </div>

                <div className='p-[1px] bg-gradient-to-r from-[#d1cb1809] to-[#E77962] rounded-full'>
                  <p className='text-white text-[23px] py-4 px-6 bg-[#191610] rounded-full'>5% <span className='text-[#bbb]'> of token go to Marketing</span></p>
                </div>

                <div className='p-[1px] bg-gradient-to-r from-[#D1CB18] to-[#e7786209] rounded-full'>
                  <p className='text-white text-[23px] py-4 px-6 bg-[#191610] rounded-full'>5% <span className='text-[#bbb]'> of CEX and Future team</span></p>
                </div>
              </div>
            </div>

            <div className='flex justify-center'>
              <div className="bg-gradient-to-r from-[#D1CB18] to-[#E77962] hover:from-[#e7e01a] hover:to-[#fa8168] rounded-[17px] w-fit">
                <button className="text-[#FFF] 2xl:text-[20px] px-6 2xl:px-20 py-[15px] rounded-[30px]">Buy Now</button>
              </div>
            </div>
          </div>

          {/* Footer section */}
          <div className='md:flex justify-between items-center pt-16'>
            <Link to="home" smooth={true} offset={-30} duration={600} className=" text-white text-[24px] flex items-center cursor-pointer">
              <img src={logo} alt="Logo" className="w-auto mr-3 ml-5 md:ml-0" />
              <p>$EGOM</p>
            </Link>

            <p className='text-white text-[18px] font-normal 2xl:-ml-36'>Powered By Solana</p>

            {/* Scroll Up */}
            <div className='relative'>
              <ScrollToTop
                className="scrollIcon"
                smooth={true}
                top="1800"
                style={{
                  // backgroundColor: "#20c99685",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "50%",
                  padding: "10px",
                }}
                component={<p style={{ color: "white" }}><img src={arrowIcon} alt="Logo" className="w-auto mr-3 ml-5 md:ml-0" /></p>}
              />
            </div>
          </div>
        </div>

      </Container>
    </div>
  );
};

export default Tokenomics;
