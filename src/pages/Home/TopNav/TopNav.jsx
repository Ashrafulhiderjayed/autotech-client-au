import { FaPhone } from "react-icons/fa";
import { GrFormSchedule } from "react-icons/gr";
import { PiMapPinBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import './TopNav.css'

const TopNav = () => {
    return (
        <section className="flex justify-end text-white w-full" id="topNav">
            <div className="bg-black littleParallelogram -mr-2 flex justify-end">

                <div className="flex gap-7 px-3 py-1">
                    <p className="antiParallelogram flex items-center p-2 font-bold text-xs hover:text-mainColor"><FaPhone className='inline mr-2 text-xs' />CALL US NOW +61-2-123-1234</p>
                    <p className="border-r-2 antiParallelogram"></p>
                    <p className="antiParallelogram flex items-center p-2 font-bold text-xs hover:text-mainColor"><GrFormSchedule className='inline mr-2 text-lg'/><Link to="appointment">APPOINTMENT</Link> </p>
                    <p className="border-r-2 antiParallelogram"></p>
                    <p className="antiParallelogram flex items-center mr-5 p-2 font-bold text-xs hover:text-mainColor"><PiMapPinBold className='inline mr-2 text-sm' /> FIND US ON MAP </p>
                </div>

            </div>
        </section>
    );
};

export default TopNav;