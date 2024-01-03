import backgroundImage from '../../assets/img/SUV-blue.svg';

const Services = () => {
    const heroStyle = {
        backgroundImage: `url(${backgroundImage})`
    }
  return (
    // <div className="hero min-h-screen" style={heroStyle}>
    <div className="hero justify-start" style={heroStyle}>

      <section className='bg-gradient-to-r from-black to-transparent'>
      {/* <div className="hero-overlay"></div> */}
      <div className="hero-content text-left text-neutral-content py-28 "> 
        <div className="mr-80 p-8">
          <h1 className="mb-5 text-6xl font-bold">Engine Oil</h1>
          <p className="mb-5">
          Our mobile mechanics offer services 7 days a week. Upfront and transparent pricing.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
      </section>
    </div>
  );
};

export default Services;
