import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

import './Navbar.css'
import ProfilePopup from './ProfilePopup';
import CartPopup from './CartPopup';
import LogReg from './LogReg';

function Navbar() {
    const [activeTab, setActiveTab] = useState('');

    //cart ref
    const cartPopupRef = useRef(null);
    const cartContentRef = useRef(null);

    //login/signup popup ref
    const logregPopupRef = useRef(null);
    const logregContentRef = useRef(null);

    //the content
    const loginRef = useRef(null);
    const registerRef = useRef(null);

    //profile ref
    const profilePopupRef = useRef(null);
    const profileContentRef = useRef(null); //for popup close, on outside click

    //cart clicks
    const handleCartClick = (e) => {
        e.stopPropagation();
        cartPopupRef.current.classList.add('popup-active');
        cartContentRef.current.classList.add('cart-content-active');

        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = '15px';
        document.querySelector('.right-nav').style.paddingRight = '14px';
    }
    const handleCartPopupClose = () => {
        cartPopupRef.current.classList.remove('popup-active');
        cartContentRef.current.classList.remove('cart-content-active');

        document.body.style.overflow = null;
        document.body.style.paddingRight = null;
        document.querySelector('.right-nav').style.paddingRight = null;
    }
    //login/reg
    const handleLoginClick = (e) => {
        e.stopPropagation();
        logregPopupRef.current.classList.add('popup-active');
        loginRef.current.style.display = 'flex';

        setActiveTab('login')
    }
    const handleRegisterClick = (e) => {
        e.stopPropagation();
        logregPopupRef.current.classList.add('popup-active');
        registerRef.current.style.display = 'flex';

        setActiveTab('register')
    }
    const handleLogRegClose = () => {
        logregPopupRef.current.classList.remove('popup-active');

        loginRef.current.style.display = 'none';
        registerRef.current.style.display = 'none';
        
        setActiveTab('');
    }

    //profile clicks
    const handleProfileClick = (e) => {
        e.stopPropagation();
        profilePopupRef.current.classList.add('popup-active');
    }
    const handleProfilePopupClose = () => {
        profilePopupRef.current.classList.remove('popup-active');
    }

    useEffect(() => {
        const handleClickOutside = (e) => {
            //profile
            if (profilePopupRef.current && profilePopupRef.current.classList.contains('popup-active') && !profileContentRef.current.contains(e.target)) {
                profilePopupRef.current.classList.remove('popup-active');
            }

            //cart
            if (cartPopupRef.current && cartPopupRef.current.classList.contains('popup-active') && !cartContentRef.current.contains(e.target)) {
                cartPopupRef.current.classList.remove('popup-active');
                cartContentRef.current.classList.remove('cart-content-active');

                //reset the style that was set
                document.body.style.overflow = null;
                document.body.style.paddingRight = null;
                document.querySelector('.right-nav').style.paddingRight = null;
            }

            //login/signup
            if (logregPopupRef.current && logregPopupRef.current.classList.contains('popup-active') && !logregContentRef.current.contains(e.target)) {
                logregPopupRef.current.classList.remove('popup-active');

                loginRef.current.style.display = 'none';
                registerRef.current.style.display = 'none';

                setActiveTab('');
            }
        }

        document.addEventListener('click', handleClickOutside);
    }, []);

    return (
        <nav>
            <Link to='/' className='shop-name'>Le E-commerce</Link>
            <div className="right-nav">
                {/* placeholder image for now */}
                <input type="text" className='search' placeholder='🔍Search' />
                <img src="#" alt="cart" onClick={handleCartClick} />
                <CartPopup cartPopupRef={cartPopupRef} cartContentRef={cartContentRef} handleCartPopupClose={handleCartPopupClose} />
                {/* <img src="#" alt="profile" onClick={handleProfileClick} /> */}
                <button onClick={handleLoginClick}>Login</button>
                <button onClick={handleRegisterClick}>Register</button>
                <LogReg activeTab={activeTab} setActiveTab={setActiveTab} logregPopupRef={logregPopupRef} logregContentRef={logregContentRef} loginRef={loginRef} registerRef={registerRef} handleLogRegClose={handleLogRegClose} />
                <ProfilePopup profilePopupRef={profilePopupRef} profileContentRef={profileContentRef} handleProfilePopupClose={handleProfilePopupClose} />
            </div>
        </nav>
    );
}

export default Navbar;