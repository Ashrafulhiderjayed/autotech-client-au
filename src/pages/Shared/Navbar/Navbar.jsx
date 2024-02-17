import { Link } from 'react-router-dom';
import logo from '../../../assets/img/wheelss - Copy.jpg'
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaArrowCircleRight } from 'react-icons/fa';
import { FaShoppingCart } from "react-icons/fa";
import useCart from '../../../hooks/useCart';

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);
  const [cart] = useCart();

  const handleLogOut = () => {
    logOut().then().catch();
  };

  const navItems = <>
  <li><Link to='/'>Home</Link></li>
  <li><Link to='/allappointments'>Appointments</Link></li>
  {
    user?.email?
    <li><Link to='/myappointments'>My Appointments</Link></li>
    :
    <li><Link to="/signup">Appointments History</Link></li>
  }
  {
    <li><Link to='/appointment'>Create an Appointment</Link></li>
  }
  {
    <li><Link to='/dashboard/mycart'>
      <button className="btn">
        <FaShoppingCart />
        <div className="badge badge-secondary">+{cart?.length || 0}</div>
      </button>
    </Link></li>
  }
  {
    user?.email?
    <li><Link to='/dashboard'>Dashboard</Link></li>
    :
    <li><Link to='/signup'>Dashboard</Link></li>
  }
  </>
  return (
  <div className="font-CreteRound navbar bg-base-100 mx-auto max-w-7xl px-0">
    {/* <h1 className='lg:text-2xl font-bold float'> <GiAutoRepair className='text-5xl' /> Auto Tech</h1> */}
    <div>
      <img className='h-12 bg-red-500 rounded-lg mr-2' src={logo} alt="Nav-image" />
      <h2 className='lg:text-4xl font-extrabold text-mainColor hover:text-black'>AutoTech</h2>
    </div>
    {/* <a className="btn btn-ghost normal-case text-xl font-bold"><FaCar className='text-primary2 mr-1'/>Wheels</a> */}
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          {navItems}
        </ul>
      </div>
      {/* <a className="btn btn-ghost normal-case text-xl font-bold"><FaCar className='text-primary2 mr-1'/>Wheels</a> */}
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        {navItems}
      </ul>
    </div>
    <div className="navbar-end">
      {
        user?. uid && (
          <img
          style={{ height: "40px", width: "40px", borderRadius: '50%' }}
          src={user.photoURL}
          alt="Profile Picture"
          data-toggle="tooltip"
          title={user.displayName}
          className="border-2 border-primary mr-1"
        />
    )
  }
  {
    user? (
      <button onClick={handleLogOut} className="bg-mainColor text-white font-bold py-2 px-4 rounded">Sign Out</button>
    ):
    <Link to="/signup">
    <button className="btn btn-md shadow-2xl bg-mainColor text-white font-bold rounded hover:bg-black">Sign up<FaArrowCircleRight className="inline" /> </button>
  </Link>
  }
    </div>
  </div>
  );
};

export default Navbar;