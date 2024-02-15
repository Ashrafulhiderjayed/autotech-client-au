import { useContext, useRef } from "react";
import { BsSpeedometer } from "react-icons/bs";
import { FaTruckFast } from "react-icons/fa6";
import { GiNewspaper } from "react-icons/gi";
import { AuthContext } from "../../providers/AuthProvider";
import emailjs from '@emailjs/browser';
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Appointment = () => {
    const {user} = useContext(AuthContext);
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vpz3ifh', 'template_gpdg2ca', form.current, 'iQeITfrps3IWheK58')
      .then((result) => {
        if(result.status === 200){
            Swal.fire({
                title: "Appointment Successful!",
                text: "Check your email varification!",
                icon: "success"
              });
        }
      })
      .catch((error) => {
        console.log(error.text);
      });
  };
  

    return (
        <section className="mx-auto max-w-7xl text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-mainColor mb-2 mt-32">Schedule Your Appointment Online</h2>
            <p>For service within 24 hours, please contact us at 1900 1088</p>
            <div className="flex justify-center my-20">
                <div>
                    <div className="bg-gray-100 flex p-5 py-10 rounded-full text-center justify-center mb-5"><BsSpeedometer className="text-3xl lg:text-5xl text-mainColor" /></div>
                    <p>Fast Delivery Service</p>
                </div>
                <div className="mx-14">
                    <div className="bg-gray-100 flex p-5 py-10 rounded-full text-center justify-center mb-5"><FaTruckFast className="text-3xl lg:text-5xl text-mainColor" /></div>
                    <p>Free Shuttle Service</p>
                </div>
                <div>
                    <div className="bg-gray-100 flex p-5 py-10 rounded-full text-center justify-center mb-5"><GiNewspaper className="text-3xl lg:text-5xl text-mainColor" /></div>
                    <p>One Year Warranty</p>
                </div>
            </div>

            <div className='flex justify-center'>
                
                <div className="p-4 w-4/5 bg-gradient-to-b from-slate-300 to-transparent">
                <form className="card-body" ref={form} onSubmit={sendEmail}>
                <p className="font-bold lg:text-xl text-left my-3">Contact Infomation</p>
                    <div className="form-control">
                    <input type="text" name="user_name" placeholder="Your Name" className="input input-bordered" required />
                    </div>

                    <div className='lg:flex gap-5 my-5'>
                    <div className="form-control lg:flex-1">
                        <input type="email" name="user_email" placeholder="Email" className="input" required />
                    </div>
                    <div className="form-control lg:flex-1">
                        <input type="number" placeholder="Phone" className="input" required />
                    </div>
                    </div>
                    <select className="select select-bordered join-item">
                    <option selected>Appointment Reason</option>
                    <option>Engine Oil Change</option>
                    <option>Diagnostic</option>
                    <option>Car Checks</option>
                    <option>Brakes</option>
                    <option>Transmissions</option>
                    <option>Tires & Wheels</option>
                    </select>

                    <p className="font-bold lg:text-xl text-left mt-11 mb-3">Vehicle Infomation</p>
                    <div className="form-control">
                        <input type="text" name="user_vehicle" placeholder="Vehicle Eg:Crown FXS-2024" className="input input-bordered" required />
                    </div>

                    <p className="font-bold lg:text-xl text-left mt-11 mb-3">Please Tell Us Does Your vehicle need to be:</p>
                    <div className='flex gap-16'>
                    <div className='flex justify-center gap-3'>
                        <input type="radio" id="morning" name="radio-8" className="radio" checked />
                        <label htmlFor="morning">Shuttle</label>
                    </div>
                    
                    <div className='flex justify-center gap-3'>
                        <input type="radio" id="morning" name="radio-8" className="radio" />
                        <label htmlFor="morning">Towed</label>
                    </div>
                    </div>

                    <p className="font-bold lg:text-xl text-left mt-11 mb-4">Please Tell Us Your Reason for Scheduling an Appointment</p>
                    <div className="form-control">
                        <textarea name="message" placeholder="Message" className="textarea textarea-bordered textarea-sm w-full" ></textarea>
                    </div>

                    <p className="font-bold lg:text-xl text-left mt-11 mb-3">Choose Date and Time</p>
                    <div className='lg:flex gap-5 mb-5'>
                    <div className="form-control flex-1">
                    {/* <input type="date" id="start" className='input' name="trip-start" value="2024-07-10" min="2018-01-01" max="2026-03-30" /> */}
                    <input type="date" id="start" className='input' name="date" value="2024-07-10" min="2018-01-01" max="2026-03-30" />
                    </div>

                    
                    <div className="form-control flex-1">
                        <select className="select select-bordered join-item">
                        <option selected>Time</option>
                        <option>09:00 AM</option>
                        <option>10:00 AM</option>
                        <option>11:00 AM</option>
                        <option>12:00 PM</option>
                        <option>03:00 PM</option>
                    </select>
                    </div>
                    </div>

                    <div className="form-control mt-6">
                    {
                        user? (
                        <button className="btn bg-mainColor text-white hover:bg-black" type='submit' value="Send">Request Appointment</button>
                        ):
                        <Link to="/login">
                            <button className="btn w-full bg-mainColor text-white hover:bg-black" type='submit' value="Send">Request Appointment</button>
                        </Link>
                    }
                    </div>
                </form> 
                </div>
            </div>
        </section>
    );
};

export default Appointment;