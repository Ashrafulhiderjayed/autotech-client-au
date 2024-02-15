

import Title from '../../Shared/Title/Title';
import './Technician.css';

const technicians = [
    {
      Experience: '3 years',
      name: 'John Doe',
      skill: 'Tire Repair',
      Contact: '+604282931',
      price: '$50/hour',
      location: 'Sydney'
    },
    {
      Experience: '5 years',
      name: 'Jane Smith',
      skill: 'Engine oil change',
      Contact: '+604282931',
      price: '$60/hour',
      location: 'Brisbane'
    },
    {
      Experience: '2 years',
      name: 'Alex Johnson',
      skill: 'Break Repair',
      Contact: '+604282931',
      price: '$70/hour',
      location: 'Melborne'
    }
  ];
  

const Technician = () => {
    const handleAddToCart = item =>{
        console.log(item)
    }
    return (
        <div className='w-full'>
            <div className="lg:pl-96 mt-48 m-24">
                <Title className="text-center" text="WE SOLVE PROBLEMS"></Title>
                <h2 className="text-2xl lg:text-6xl font-bold">Our <br /> Technicians</h2>
            </div>
            <section className="container lg:py-10 w-full flex md:flex-row sm:flex-col items-center justify-between">
                <div className="student-card lg:h-1/3 w-80 rounded-xl drop-shadow-2xl border">
                    <div className="image">
                        <div className="outer">
                            <div className="inner student-card-img">
                                {/* <img src={img1}></img> */}
                            </div>
                        </div>
                    </div>
                    <div className="name">
                    Jane Cole
                    </div>
                    <div className="details bg-primary text-white">
                        <div className="col ms-6">
                            <ul type='none'>
                                <li>Experience: 3 years</li>
                                <li>Rule: Tire Repair</li>
                                <li>Location: Sydney</li>
                                <li>Contact No: +604282931</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="student-card h-1/3 w-80 rounded-xl drop-shadow-2xl">
                    {/* <div className='title'>
                        <h1>Tamim Iqbal Khan</h1>
                        <p>Kazir Dewri, Chattogram, Bangladesh</p>
                    </div> */}
                    <div className="image">
                        <div className="outer">
                            <div className="inner student-card-img2">
                                {/* <img src={img1}></img> */}
                            </div>
                        </div>
                    </div>
                    <div className="name">
                        Luke Ford
                    </div>
                    <div className="details bg-primary text-white">
                        <div className="col ms-6">
                            <ul type='none'>
                                <li>Experience: 4 years</li>
                                <li>Rule: Break Repair</li>
                                <li>Location: Brisbane</li>
                                <li>Contact No: +604282931</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="student-card h-1/3 w-80 rounded-xl drop-shadow-2xl">
                    <div className='title'>
                        {/* <h1>Street Photography</h1> */}
                        {/* <p>Kazir Dewri, Chattogram, Bangladesh</p> */}
                    </div>
                    <div className="image">
                        <div className="outer">
                            <div className="inner student-card-img3">
                                {/* <img src={img1}></img> */}
                            </div>
                        </div>
                    </div>
                    <div className="name">
                        John Doe
                    </div>
                    <div className="details bg-primary text-white">
                        <div className="col ms-6">
                            <ul type='none'>
                                <li>Experience: 2 years</li>
                                <li>Rule: Engine Oil Change</li>
                                <li>Location: Melborne</li>
                                <li>Contact No: +604282931</li>
                            </ul>
                        <button onClick={()=> handleAddToCart(item)}>Book Now</button>
                        </div>
                    </div>
                </div>
                
            </section>
        </div>
    );
};

export default Technician;