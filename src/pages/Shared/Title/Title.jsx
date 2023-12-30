import './Title.css'

const Title = ({text}) => {
    return (
        <div className='flex items-center text-mainColor'>
            <div className="w-3 h-5 bg-mainColor littleParallelogram mr-4"> </div>
            <h3>  {text}</h3>
        </div>
    );
};

export default Title;