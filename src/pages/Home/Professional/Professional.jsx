import { NavLink } from 'react-router-dom';
import professional from '../../../assets/img/professional (1).jpg'
import img1 from '../../../assets/img/C-10528__09625.jpg'
import { FaArrowRight } from 'react-icons/fa';
import { GiAutoRepair } from "react-icons/gi";
import { MdOutlineTireRepair } from "react-icons/md";
import { MdCarRepair } from "react-icons/md";
import './Professional.css';

const Professional = () => {
    return (
        <section className="flex lg:my-16">
            <div className='flex-1 relative'>
                <img src={professional} alt="" />
                <div className='flex justify-evenly absolute w-5/6 -mt-14 ml-10 p-2 bg-mainColor parallelogram'>
                    {/* <div className='parallelogram1'><img src={img1} className='rounded-full h-14' alt="" /><h4 className='text-white text-base'> ASE <br /> Certified</h4> </div> */}
                    <div className='parallelogram1'><MdCarRepair className='text-6xl text-white' /> <h4 className='text-white text-base'>Certified <br /> Repaiar</h4></div>
                    <div className='parallelogram1'><GiAutoRepair className='text-6xl text-white' /> <h4 className='text-white text-base'>Certified <br /> Service</h4></div>
                    <div className='parallelogram1'><MdOutlineTireRepair className='text-6xl text-white' /> <h4 className='text-white text-base'>Auto <br /> Repaiar</h4></div>
                </div>
            </div>
            <div className='flex-1 pl-5'>
                <p>CAR SERVICES WITH YOU IN MIND</p>
                <h2 className='text-6xl font-bold'>WE ARE A PROFESSIONAL AUTO REPAIR SERVICE</h2>
                <p className='my-8'>Macchina is a well-established auto repair shop in Manhattan, New York. Our company offers car maintenance to major repairs since 1972. We are a company that has built its reputation on reliable services for all times of vehicles in Manhattan, New York.</p>
                <NavLink className='flex items-center'>MORE ABOUT US <FaArrowRight className='inline ml-2' />  </NavLink>
            </div>
        </section>
    );
};

export default Professional;




