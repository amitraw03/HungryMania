import React, { useState } from 'react'
import useOnlineStatus from '../utils/useOnlineStatus';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    const [btnState, setBtnState] = useState("Login");

    const isOnline = useOnlineStatus();

    // Subscribing To the Store using our Selector
    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className='h-28 flex justify-between shadow-lg  '>
            <div className="mt-5 md:-mt-9">
                <Link to="/">
                    <img
                        className="w-36 ml-8"
                        src={LOGO_URL}
                        alt="logo"
                    />
                </Link>
            </div>

            <div>
                <ul className="flex ">
                    <li className="px-6 mt-6">{isOnline ? '🟢' : '🔴'}</li>
                    <li className="text-xl font-mono  px-6 mt-6"><Link to="/"> Home</Link></li>
                    <li className="text-xl font-mono px-6 mt-6"><Link to="/about"> About Us</Link></li>
                    <li className="text-xl font-mono px-6 mt-6"><Link to="/contact"> Contact Us</Link></li>
                    <li className="text-xl font-mono px-6 mt-6"><Link to="/grocery">Grocery</Link></li>
                    <li className="text-xl font-mono px-6 mt-6"><Link to="/cart">🛒Cart({cartItems.length})</Link></li>
                    <button onClick={() => {
                        btnState === "Login"
                            ? setBtnState("Logout")
                            : setBtnState("Login")
                    }} className={`font-serif px-6 mt-4 mr-3 ${btnState === "Login" ? 'bg-green-500' : 'bg-red-500'} py-2 rounded-md`}  //can write classname like this too
                    >{btnState}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header