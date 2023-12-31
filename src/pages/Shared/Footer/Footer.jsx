import { FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaTwitter, FaVoicemail, FaYoutube } from 'react-icons/fa';
import logo from '../../../assets/img/wheelss.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { SlArrowRight, SlLocationPin } from "react-icons/sl";
import { RiRedPacketLine } from "react-icons/ri";
import { SlEnvolopeLetter } from "react-icons/sl";


const Footer = () => {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    AOS.init({duration: 3000});
  }, [])

    return (
        <section className=' bg-footerColor text-white mt-32'>
        <footer className="font-CreteRound footer mt-12 p-10">
          <div>
            <img className='h-16 bg-red-500 rounded-lg' src={logo} alt="" data-aos="fade-left"/>
            <p>AutoTech Ltd.<br/>Providing reliable and affordable toy since 1992</p>
            <p className='text-lightWhite text-justify mt-8 mb-2'>Discover peace of mind on the road with our expert car repair services. <br /> At AutoTech, our dedicated team of skilled technicians is committed to <br /> delivering reliable and top-notch repairs for your vehicle. </p>
            <section className='flex gap-4' data-aos="fade-up" data-aos-delay="50">
              <a href="https://www.facebook.com/">
                <FaFacebook></FaFacebook>
              </a>
              <a href="https://www.youtube.com/">
                <FaYoutube></FaYoutube>
              </a>
              <a href="https://www.instagram.com/">
                <FaInstagram></FaInstagram>
              </a>
              <a href="https://twitter.com/">
                <FaTwitter></FaTwitter>
              </a>
              <a href="https://support.google.com/phoneapp/answer/2811844?hl=en">
                <FaVoicemail></FaVoicemail>
              </a>
              <a href="https://www.linkedin.com/">
                {/* <FaLinkedinIn></FaLinkedinIn> */}
                <FaLinkedin></FaLinkedin>
              </a>
              
              
              
              
              
            </section>
          </div> 
          <div>
            <span className="font-extrabold text-white mb-5 text-lg">Our Locations</span> 
            <a className="link link-hover font-bold">Sydney Harbor Viewpoint</a> 
            <a className="link link-hover text-lightWhite">42 Circular Quay, Sydney, NSW</a> 
            <a className="link link-hover text-lightWhite">Contact: +61-2-123-1234</a> 

            <a className="link link-hover font-bold mt-3">Great Barrier Reef Gateway</a>
            <a className="link link-hover text-lightWhite">18 Coral Avenue, Cairns, QLD</a>
            <a className="link link-hover text-lightWhite">Contact: +61-7-456-4567</a>

            <a className="link link-hover font-bold mt-3">Blue Mountains Retreat</a>
            <a className="link link-hover text-lightWhite">77 Echo Valley Road, Katoomba, NSW</a>
            <a className="link link-hover text-lightWhite">Contact: +61-2-987-9876</a>
          </div> 
          <div>
            <span className="font-extrabold text-white mb-5 text-lg">About AutoTech</span> 
            <p><SlArrowRight className='inline' size="0.8em" /><a className="link link-hover text-lightWhite"> About Us</a> </p>
            <p><SlArrowRight className='inline' size="0.8em" /><a className="link link-hover text-lightWhite"> Contact</a> </p>
            <p><SlArrowRight className='inline' size="0.8em" /><a className="link link-hover text-lightWhite"> Services</a> </p>
            <p><SlArrowRight className='inline' size="0.8em" /><a className="link link-hover text-lightWhite"> Appointment</a> </p>
            <p><SlArrowRight className='inline' size="0.8em" /><a className="link link-hover text-lightWhite"> Our Pricing</a> </p>
            <p><SlArrowRight className='inline' size="0.8em" /><a className="link link-hover text-lightWhite"> Read FAQs</a> </p>
          </div> 
          <div>
            <span className="font-extrabold text-white mb-5 text-lg">Get In Touch</span> 
            <p><SlLocationPin className='inline mr-2' size="0.8em" /><a className="link link-hover text-lightWhite"> 42 Circular Quay, Sydney, NSW</a> </p>
            {/* <p><SlEnvolopeLetter className='inline mr-2' size="0.8em" /><a className="link link-hover text-lightWhite"></a> support@autotech.com </p> */}
            <p><RiRedPacketLine className='inline mr-2' size="0.8em" /><a className="link link-hover text-lightWhite"></a> support@autotech.com </p>
            <p><FaPhone className='inline mr-2 hover:text-white' size="0.8em" /><a className="link link-hover text-lightWhite"> Phone:</a>+61-2-123-1234 </p>

            <h4 className='mt-3 font-semibold'>Subscribe Newsletter</h4>
            <div className="relative">
              <input
                type="text"
                placeholder="Your email address"
                className="input input-bordered input-success w-full max-w-xs" // Adjust padding to make space for the icon
              />
              {/* <RiRedPacketFill className="absolute left-48 top-1/2 transform -translate-y-1/2 text-gray-400" /> */}
              <SlEnvolopeLetter className="absolute left-48 top-1/2 transform -translate-y-1/2 text-gray-600" />
            </div>
            
          </div>
        </footer>
        <hr />
        <p className='text-center font-medium  p-5'>&copy; {currentYear} AUTOTECH, Inc. All rights reserved.</p>
        </section>
    );
};

export default Footer;