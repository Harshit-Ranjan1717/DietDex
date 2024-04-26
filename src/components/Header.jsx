
import React from 'react';
import { Navbar } from './Navbar';
import Login from './Login';
import Body from './Body';
import Footer from './Footer';
const Header = () => {
  return (
    <>
      <Navbar />
      <div className='flex justify-start items-center'>
        <div className='flex flex-col ml-20 w-[60%] h-[400px] justify-center items-start'>
          <p className='text-6xl'>Empowering Wellness:</p>
          <p className='text-5xl pt-2'>Digital Dietitian App</p>
          <p className='text-2xl pt-8'>Elevate your well-being with DietDex, your personalized digital dietician. Tailored nutrition plans, expert guidance, and science-backed insights help you achieve your health goals effortlessly. Start your journey today</p>
          <button className='border-2 px-4 py-2 mt-7 bg-[#47c640] text-white'>Get started</button>
        </div>
        <div>
          <img className="mt-10" src="https://img.freepik.com/premium-vector/weight-loss-vector-illustration-woman-body-transformation-concept-with-diet-healthy-lifestyle_2175-23018.jpg?w=996" alt="" />
        </div>
      </div>

      <div>

        <div className='flex w-full justify-center items-center bg-gray-200 h-8'>
          <p className='text-2xl'>Embark on a journey towards a healthier, more empowered lifestyle with our innovative digital dietitian app.</p>
        </div>

        <div className='mt-10 ml-24 mr-24 flex justify-between'>

          <div className="block rounded-lg  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] w-[300px] h-[550x] bg-[#BDB76B]">

            <div className="relative overflow-hidden bg-cover bg-no-repeat">
              <img className="rounded-t-lg h-60 w-80"  src="https://www.thespruceeats.com/thmb/h3qLzZSITlnTJblh0s7OFmpMHAs=/6720x4480/filters:fill(auto,1)/green-vegetarian-buddha-bowl-salad-with-vegetables-and-quinoa--spinach--avocado--cucumbers--tomatoes--carrots--radishes--chickpeas-with-sesame-seeds-941023792-5acaca533128340037068ad3.jpg" alt="" />
              <a href="#!">
                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
              </a>
            </div>
            <div className="p-6">
              <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">Vegan Diet Plan</h5>
              <p className="mb-4 text-base text-white">Vegan diets exclude all animal products, focusing solely on plant-based foods for ethical, environmental, and health reasons.</p>

              <button
                type="button"
                className="bg-[#1f2937] inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                Get Plan
              </button>
            </div>
          </div>

          <div className="block rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] w-[300px] h-[550x] bg-[#32bd32]">

            <div className="relative overflow-hidden bg-cover bg-no-repeat">
              <img className="rounded-t-lg h-60 w-80" src="https://images.immediate.co.uk/production/volatile/sites/30/2023/01/Ponzu-tofu-poke-bowl-8733c67.jpg?quality=90&webp=true&resize=375,341" alt="" />
              <a href="#!">
                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
              </a>
            </div>
            <div className="p-6">
              <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">Vegetarian Diet Plan</h5>
              <p className="mb-4 text-base text-white">Vegetarian diets abstain from meat but may include dairy and/or eggs, offering a plant-based diet with flexibility.</p>

              <button
                type="button"
                className=" bg-[#1f2937] inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                Get Plan
              </button>
            </div>

          </div>



          <div className="block rounded-lg  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] w-[300px] h-[550x] bg-[#ea4a4f]">

            <div className="relative overflow-hidden bg-cover bg-no-repeat">
              <img className="rounded-t-lg h-60 w-80" src="https://www.eatingwell.com/thmb/s3Wt3mPos08KmO4wKCYWAs0GXeA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/3748651-fedcb9b128814fd18be27536abd8d07d.jpg" alt="" />
              <a href="#!">
                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
              </a>
            </div>
            <div className="p-6">
              <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">Non-Vegetarian Diet Plan</h5>
              <p className="mb-4 text-base text-white">Non-vegetarian diets include meat, poultry, seafood, dairy, and eggs, providing diverse culinary options and rich protein sources</p>

              <button
                type="button"
                className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] bg-[#1f2937] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                Get Plan
              </button>
            </div>
          </div>

        </div>
      </div>

      <Body/>
      <Footer/>
    </>
  );
}

export default Header;

