import img1 from '../../../assets/img/r1.jpg';
import img2 from '../../../assets/img/r2.jpg';
import img3 from '../../../assets/img/r3.jpg';
import img4 from '../../../assets/img/r4.jpg';

const Banner = () => {
    return (
        <div className="carousel w-full h-[630px]">
          <div id="slide1" className="carousel-item relative w-full">
            <img src={img1} className="w-full" />
            <div className="absolute h-full rounded-xl flex items-center left-0 top-0 bottom-3 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
              <div className='text-white space-y-7 pl-12 w-1/2'>
                <h2 className='text-6xl font-bold'>Affordable Price For car Servicing</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae amet sit animi. Repellat commodi, veniam corrupti blanditiis minima suscipit consectetur.</p>
                <div>
                  <button className="btn btn-primary mr-5">Discover More</button>
                  <button className="btn btn-outline btn-secondary">Primary</button>
                </div>
              </div>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-3">
              <a href="#slide4" className="btn btn-circle">❮</a> 
              <a href="#slide2" className="btn btn-circle mx-5">❯</a>
            </div>
          </div> 
          <div id="slide2" className="carousel-item relative w-full">
            <img src={img2} className="w-full" />
            <div className="absolute h-full rounded-xl flex items-center left-0 top-0 bottom-3 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
              <div className='text-white space-y-7 pl-12 w-1/2'>
                <h2 className='text-6xl font-bold'>Affordable Price For car Servicing</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae amet sit animi. Repellat commodi, veniam corrupti blanditiis minima suscipit consectetur.</p>
                <div>
                  <button className="btn btn-primary mr-5">Primary</button>
                  <button className="btn btn-outline btn-secondary">Primary</button>
                </div>
              </div>
            </div>
            <div className="absolute flex justify-end left-5 right-5 bottom-3">
              <a href="#slide1" className="btn btn-circle">❮</a> 
              <a href="#slide3" className="btn btn-circle mx-5">❯</a>
            </div>
          </div> 
          <div id="slide3" className="carousel-item relative w-full">
            <img src={img3} className="w-full" />
            <div className="absolute h-full rounded-xl flex items-center left-0 top-0 bottom-3 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
              <div className='text-white space-y-7 pl-12 w-1/2'>
                <h2 className='text-6xl font-bold'>Affordable Price For car Servicing</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae amet sit animi. Repellat commodi, veniam corrupti blanditiis minima suscipit consectetur.</p>
                <div>
                  <button className="btn btn-primary mr-5">Primary</button>
                  <button className="btn btn-outline btn-secondary">Primary</button>
                </div>
              </div>
            </div>
            <div className="absolute flex justify-end left-5 right-5 bottom-3">
              <a href="#slide2" className="btn btn-circle">❮</a> 
              <a href="#slide4" className="btn btn-circle mx-5">❯</a>
            </div>
          </div> 
          <div id="slide4" className="carousel-item relative w-full">
            <img src={img4} className="w-full" />
            <div className="absolute h-full rounded-xl flex items-center left-0 top-0 bottom-3 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
              <div className='text-white space-y-7 pl-12 w-1/2'>
                <h2 className='text-6xl font-bold'>Affordable Price For car Servicing</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae amet sit animi. Repellat commodi, veniam corrupti blanditiis minima suscipit consectetur.</p>
                <div>
                  <button className="btn btn-primary mr-5">Primary</button>
                  <button className="btn btn-outline btn-secondary">Primary</button>
                </div>
              </div>
            </div>
            <div className="absolute flex justify-end left-5 right-5 bottom-3">
              <a href="#slide3" className="btn btn-circle">❮</a> 
              <a href="#slide1" className="btn btn-circle mx-5">❯</a>
            </div>
          </div>
        </div>
    );
};

export default Banner;