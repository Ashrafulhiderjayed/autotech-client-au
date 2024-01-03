import backgroundImage from '../../assets/img/SUV-blue.svg';
import { TbCircleCheckFilled } from "react-icons/tb";

const Services = () => {
    const heroStyle = {
        backgroundImage: `url(${backgroundImage})`
    }
  return (
    <>
    {/* Swction 1: Heading part */}
    <section className="hero justify-start" style={heroStyle}>

      <div className='bg-gradient-to-r from-black to-transparent'>
      {/* <div className="hero-overlay"></div> */}
      <div className="hero-content text-left text-neutral-content py-28 bg-gradient-to-r from-black to-transparent"> 
        <div className="lg:mr-80 p-8">
          <h1 className="mb-5  lg:text-6xl font-bold shadow-2xl text-mainColor">Engine Oil</h1>
          <p className="mb-5 shadow-2xl w-3/4">
          Our mobile mechanics offer services 7 days a week. Upfront and transparent pricing.
          </p>
          <button className="btn btn-primary bg-white text-mainColor font-bold px-8 ">Schedule Appointment</button>
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
            <h2 className='text-3xl font-bold'>Top Oil Changes Service in Michigan, US</h2>
            <p className='my-6 text-justify'>Whether you need a whole new air conditioning unit, or just need some freon for your current air conditioning unit, FixLab’s auto mechanics and diesel mechanics are ready to help. We’ve worked on so many different air conditioning units by now that we’re confident we can handle any auto repair on any vehicle the pulls into our Etna Green shop, including RVs and big rigs. You can be confident in a job done right at FixLab Service Center.</p>

            <h4 className='text-xl font-bold my-1'>Common issues</h4>
            <p className='mb-4 text-justify'>Don't get stranded on the road! From frustrating flats and pesky check engine lights to sluggish brakes and sizzling engines, our expert mechanics tackle common car woes big and small. Let us diagnose and fix the hiccups before they become headaches. Get your car purring again with a click!</p>
            <ul>
                <li className='px-2'><TbCircleCheckFilled className='text-mainColor inline mr-2' />Visual inspection of related components</li>
                <li className='px-2'><TbCircleCheckFilled className='text-mainColor inline mr-2' />System analysis</li>
                <li className='px-2'><TbCircleCheckFilled className='text-mainColor inline mr-2' />Research of Technical Service Bulletins</li>
                <li className='px-2'><TbCircleCheckFilled className='text-mainColor inline mr-2' />Pin Point testing</li>
                <li className='px-2'><TbCircleCheckFilled className='text-mainColor inline mr-2' />Component diagnosis</li>
                <li className='px-2'><TbCircleCheckFilled className='text-mainColor inline mr-2' />Restore performance of fuel system</li>
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
