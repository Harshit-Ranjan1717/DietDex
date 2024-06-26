
import React from 'react';
import { Navbar } from './Navbar';
import Login from './Login';
import Body from './Body';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import Cards from './Cards';
const Header = () => {
  return (
    <>
      <Navbar />
      <div className='flex justify-start items-center'>
        <div className='flex flex-col ml-20 w-[60%] h-[400px] justify-center items-start'>
          <p className='text-6xl'>Empowering Wellness:</p>
          <p className='text-5xl pt-2'>Digital Dietitian App</p>
          <p className='text-2xl pt-8'>Elevate your well-being with DietDex, your personalized digital dietician. Tailored nutrition plans, expert guidance, and science-backed insights help you achieve your health goals effortlessly. Start your journey today</p>
          <button className='border-2 px-4 py-2 mt-7 bg-[#0ACB8B] text-white'>Get started</button>
        </div>
        <div>
          <img className="mt-10" src="https://img.freepik.com/premium-vector/weight-loss-vector-illustration-woman-body-transformation-concept-with-diet-healthy-lifestyle_2175-23018.jpg?w=996" alt="" />
        </div>
      </div>

      <Cards></Cards>

      <Body/>
      <Footer/>
    </>
  );
}

export default Header;

