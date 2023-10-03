import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Header = () => {

    const {user, logOut} = useContext(AuthContext)

    const handelSignOut = () => {
        logOut()
        .then(() => console.log('user signout sucsessfull') )
        .catch(error =>console.error(error))
    }
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to={'/'}>Home</Link>
              </li>
              <li>
              <Link to={'/login'}>Login</Link>
              </li>
              <li>
              <Link to={'/register'}>Register</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
         
          <div>
            {
                user ?<>
                <p>{user.email}</p>
                <button onClick={handelSignOut} className="btn btn-ghost btn-circle">
          Sign Out
          </button>
                </> 
                : <Link to={'/login'}>Please Login</Link>
            }
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Header;
