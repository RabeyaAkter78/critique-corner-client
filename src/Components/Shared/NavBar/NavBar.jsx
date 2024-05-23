import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    const [user] = useState(false)

    const navItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li>
            <details>
                <summary>Categories</summary>
                <ul className="p-2">
                    <li><Link to="/fashion">Fashion</Link></li>
                    <li><Link to="/electronics">Electronics</Link></li>
                </ul>
            </details>
        </li>
    </>

    return (
        <div>
            <div className="navbar bg-base-200 z-10 fixed max-w-screen-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl uppercase">Critique Corner</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="tooltip" data-tip={user?.displayName}>
                        {user && <img className="rounded-full mr-4" style={{ height: '50px' }} src={user?.photoURL} />
                        }
                    </div>
                    {user ?
                        <button>LogOut</button>
                        :
                        <Link to="login" className="btn">Login</Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default NavBar;