import { Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';

import './Navbar.css'
import ProfilePopup from './ProfilePopup';
import CartPopup from './CartPopup';

function Navbar() {
    //TODO: create custom scrollbar so cart popup dont suck

    //cart ref
    const cartPopupRef = useRef(null);
    const cartContentRef = useRef(null);

    //profile ref
    const profilePopupRef = useRef(null);
    const profileContentRef = useRef(null); //for popup close, on outside click

    //cart clicks
    const handleCartClick = (e) => {
        e.stopPropagation();
        cartPopupRef.current.classList.add('popup-active');
        cartContentRef.current.classList.add('cart-content-active');
        
        document.body.style.overflow = 'hidden';
    }
    const handleCartPopupClose = () => {
        cartPopupRef.current.classList.remove('popup-active');
        cartContentRef.current.classList.remove('cart-content-active');

        document.body.style.overflow = 'auto';
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
            if (profilePopupRef.current && profilePopupRef.current.classList.contains('popup-active') && !profileContentRef.current.contains(e.target)) {
                profilePopupRef.current.classList.remove('popup-active');
            }

            if (cartPopupRef.current && cartPopupRef.current.classList.contains('popup-active') && !cartContentRef.current.contains(e.target)) {
                cartPopupRef.current.classList.remove('popup-active');
                cartContentRef.current.classList.remove('cart-content-active');
                
                document.body.style.overflow = 'auto';
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
                <img src="#" alt="profile" onClick={handleProfileClick} />
                <ProfilePopup profilePopupRef={profilePopupRef} profileContentRef={profileContentRef} handleProfilePopupClose={handleProfilePopupClose} />
            </div>
        </nav>
    );
}

export default Navbar;