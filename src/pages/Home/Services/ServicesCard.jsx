import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const ServicesCard = ({service}) => {
    const {title, img, description} = service;
  return (
    <section className="card card-compact w-96 bg-base-100 hover:drop-shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions">
            {/* default button */}
          {/* <button className="btn btn-primary btn-sm w-full bg-mainColor font-normal text-white hover:bg-black hover:drop-shadow-xl capitalize text-shadow-lg border-0">Book Now</button> */}
          <button className="btn btn-outline hover:text-white btn-success">
            <NavLink className="">
                Book Now <FaArrowRight className="inline ml-2" />{' '}
            </NavLink>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesCard;
