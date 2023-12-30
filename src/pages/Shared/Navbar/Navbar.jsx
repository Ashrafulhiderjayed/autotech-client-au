import { Link } from 'react-router-dom';
import logo from '../../../../../../assets'
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);

  const handleLogOut = () => {
    logOut().then().catch();
  };

  const navItems = <>
  <li><Link to='/'>Home</Link></li>
  <li><Link to='/alltoys'>All Vehicles</Link></li>
  {
    user && <li><Link to='/mytoys'>My Vehicles</Link></li>
  }
  {
    <li><Link to='/addaToy'>Add a Vehicle</Link></li>
  }
  <li><Link to='/blogs'>Blogs</Link></li>
  </>
  return (
  <div className="font-CreteRound navbar bg-base-100 mx-auto px-4 max-w-7xl">
    <img className='h-14 bg-red-500 rounded-lg' src={logo} alt="" />
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
      <button onClick={handleLogOut} className="bg-primary2 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">Sign Out</button>
    ):
    <Link to="/login">
    <button className="bg-primary hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">Login</button>
  </Link>}
    </div>
  </div>
  );
};

export default Navbar;