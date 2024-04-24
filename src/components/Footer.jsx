import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-4 gap-10 py-4 bg-gray-200 ">
        <div className="ml-20">
          <h1 className="font-bold">About</h1>
          <p className="text-sm mt-4 leading-6">

          </p>
        </div>
        <div className="ml-20">
          <h1 className="font-bold relative ml-2">Contact</h1>
          <div className="flex  space-x-3 mt-4">
            <span className="relative mt-1"><FaLocationArrow></FaLocationArrow></span>
            <p className="text-sm">
              Kayaloram Rd, Punnamada, Kottankulangara, Alappuzha, Kerala, 688006
            </p>
          </div>
          <div className="flex items-center space-x-3 mt-4">
            <FaMobileAlt></FaMobileAlt>
            {/* <parent className="text-sm"> Phone : 9525561347</parent> */}
          </div>
          <div className="flex items-center space-x-3 mt-4">
            <FaEnvelope></FaEnvelope>
            <p className="text-sm">Email : harshit1717@gmail.com </p>
          </div>
        </div>
        <div className="ml-20">
          <h1 className="font-bold ">Categories</h1>
          <p className=" text-sm mt-4">Vegan Diet Plan</p>
          <p className="py-4 text-sm">Vegetarian Diet Plan</p>
          <p className="text-sm">Non-Vegetarian Diet Plan</p>

        </div>
        <div className="ml-10">
          <h1 className="font-bold">Pages</h1>
          <p className="text-sm mt-2">Home</p>
          <p className="text-sm py-2">About</p>
          <p className="text-sm ">Privacy Policy</p>
          <p className="text-sm ">Terms & Conditions</p>
          <p className="text-sm py-2">Contact Us</p>
        </div>
      </div>
      <div className="flex h-[8vh] justify-around items-center bg-gray-300">
        <div>
          <p className="text-sm relative -ml-1 text-gray-600">    DIET DEX 2024 ©️</p>
        </div>

      </div>
    </>
  );
};

export default Footer;
