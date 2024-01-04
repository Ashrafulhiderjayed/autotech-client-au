import { useLoaderData } from 'react-router-dom';
import backgroundImage from '../../assets/img/SUV-blue.svg';
import { TbCircleCheckFilled } from "react-icons/tb";
import { RiOilFill } from "react-icons/ri";
import { FaCarCrash } from "react-icons/fa";
import { GiAutoRepair } from "react-icons/gi";
import { GiCartwheel } from "react-icons/gi";
import { GiCarWheel } from "react-icons/gi";
import { MdAttractions } from "react-icons/md";
import { PiFanBold } from "react-icons/pi";
import { SiGoogleearthengine } from "react-icons/si";
import './Services.css';

const Services = () => {
    const heroStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: '86px 0',
        backgroundSize: 'cover',     
        backgroundRepeat: 'no-repeat'
    }

    const services = useLoaderData();
    const {title, top, description, detailDescription, _id} = services;
  return (
    <>
    {/* Swction 1: Heading part ==================*/}
    <section className="hero justify-start" style={heroStyle}>

      <div className='bg-gradient-to-r from-black to-transparent'>
      {/* <div className="hero-overlay"></div> */}
      <div className="hero-content text-left text-neutral-content py-28 bg-gradient-to-r from-black to-transparent"> 
        <div className="lg:mr-80 p-8">
          <h1 className="mb-5 text-2xl lg:text-6xl font-bold shadow-2xl text-mainColor">{title}</h1>
          <p className="mb-5 text-justify shadow-2xl w-3/4 sm:text-sm lg:text-lg">
          {description}
          </p>
          <button className="btn btn-primary bg-white text-mainColor font-bold lg:px-8">Schedule Appointment</button>
        </div>
      </div>
      </div>
    </section>

    {/* Swction 2: service Category and text part ============*/}
    <section className='my-28'>
    <div className="grid grid-cols-12 mx-auto max-w-7xl">
        {/* <!-- Left side (takes full width on small screens and 70% on large screens) --> */}
        <div className="col-span-12 lg:col-span-8 pr-2">
            {/* <!-- Your content for the left side goes here --> */}
            <h2 className='text-3xl font-bold'>{top}</h2>
            <p className='mt-3 mb-7 text-justify'>{detailDescription}</p>

            <h4 className='text-xl font-bold my-1'>Common issues</h4>
            <p className='mb-4 text-justify'>Don't get stranded on the road! From frustrating flats and pesky check engine lights to sluggish brakes and sizzling engines, our expert mechanics tackle common car woes big and small. Let us diagnose and fix the hiccups before they become headaches. Get your car purring again with a click!</p>
            <ul>
                <li><TbCircleCheckFilled className='text-mainColor inline mr-2 text-xl' />Visual inspection of related components</li>
                <li><TbCircleCheckFilled className='text-mainColor inline mr-2 text-xl' />System analysis</li>
                <li><TbCircleCheckFilled className='text-mainColor inline mr-2 text-xl' />Research of Technical Service Bulletins</li>
                <li><TbCircleCheckFilled className='text-mainColor inline mr-2 text-xl' />Pin Point testing</li>
                <li><TbCircleCheckFilled className='text-mainColor inline mr-2 text-xl' />Component diagnosis</li>
                <li><TbCircleCheckFilled className='text-mainColor inline mr-2 text-xl' />Restore performance of fuel system</li>
            </ul>

        </div>

        {/* <!-- Right side (takes full width on small screens and 30% on large screens) --> */}
        <section className="col-span-12 md:col-span-4 w-5/6 px-7">
            {/* <!-- Your content for the right side goes here --> */}
            <div className='shadow-2xl'>
              {/* <span className='w-3 h-5 bg-mainColor mr-4' id='custom-color'></span> */}
              <div className='w-full h-2 bg-mainColor'></div>
              <ul>
                <li className='flex justify-between py-4 px-7 font-bold border-gray-300 hover:text-black hover:font-extrabold hover:bg-gray-100'>
                  <a href="">Engine Oil Change</a>
                  <RiOilFill className='text-2xl text-gray-500' />
                </li>
                <li className='flex justify-between py-4 px-7 font-bold border-t-2 border-gray-300 hover:text-black hover:font-extrabold hover:bg-gray-100'>
                  <a href="">Diagnostic</a>
                  <GiAutoRepair className='text-2xl text-gray-500' />
                </li>
                <li className='flex justify-between py-4 px-7 font-bold border-t-2 border-gray-300 hover:text-black hover:font-extrabold hover:bg-gray-100'>
                  <a href="">Car Checks</a>
                  <FaCarCrash className='text-2xl text-gray-500' />
                </li>
                <li className='flex justify-between py-4 px-7 font-bold border-t-2 border-gray-300 hover:text-black hover:font-extrabold hover:bg-gray-100'>
                  <a href="">Air Conditioning</a>
                  <PiFanBold className='text-2xl text-gray-500' />
                </li>
                <li className='flex justify-between py-4 px-7 font-bold border-t-2 border-gray-300 hover:text-black hover:font-extrabold hover:bg-gray-100'>
                  <a href="">Engines</a>
                  <SiGoogleearthengine className='text-2xl text-gray-500' />
                </li>
                <li className='flex justify-between py-4 px-7 font-bold border-t-2 border-gray-300 hover:text-black hover:font-extrabold hover:bg-gray-100'>
                  <a href="">Brakes</a>
                  <GiCartwheel className='text-2xl text-gray-500' />
                </li>
                <li className='flex justify-between py-4 px-7 font-bold border-t-2 border-gray-300 hover:text-black hover:font-extrabold hover:bg-gray-100'>
                  <a href="">Transmissions</a>
                  <MdAttractions className='text-2xl text-gray-500' />
                </li>
                <li className='flex justify-between py-4 px-7 font-bold border-t-2 border-gray-300 hover:text-black hover:font-extrabold hover:bg-gray-100'>
                  <a href="">Tires & Wheels</a>
                  <GiCarWheel className='text-2xl text-gray-500' />
                </li>
              </ul>
            </div>
        </section>
    </div>
    </section>
    </>
  );
};

export default Services;
