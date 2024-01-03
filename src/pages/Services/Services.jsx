import { useLoaderData } from 'react-router-dom';
import backgroundImage from '../../assets/img/SUV-blue.svg';
import { TbCircleCheckFilled } from "react-icons/tb";

const Services = () => {
    const heroStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: '75px 0',
        backgroundSize: 'cover',     
        backgroundRepeat: 'no-repeat'
    }

    const services = useLoaderData();
    const {title, top, description, detailDescription, _id} = services;
  return (
    <>
    {/* Swction 1: Heading part */}
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

    {/* Swction 2: service Category and text part */}
    <section className='my-28'>
    <div className="grid grid-cols-12 bg-slate-300 mx-auto max-w-7xl">
        {/* <!-- Left side (takes full width on small screens and 70% on large screens) --> */}
        <div className="col-span-12 lg:col-span-8 bg-red-100 pr-2">
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
        <div className="col-span-12 md:col-span-4 bg-yellow-300">
            {/* <!-- Your content for the right side goes here --> */}
            Right Side (30%)
        </div>
    </div>
    </section>
    </>
  );
};

export default Services;
