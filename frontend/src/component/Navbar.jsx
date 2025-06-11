import { Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';

import './Navbar.css'
import ProfilePopup from './ProfilePopup';


function Navbar(){

    const popupRef = useRef(null);
    const popupContentRef = useRef(null); //for popup close, on outside click

    const handleProfileClick = (e) => {
        e.stopPropagation();
        popupRef.current.classList.add('popup-active');
    }
    const handlePopupClose = () => {
        popupRef.current.classList.remove('popup-active');
    }

    useEffect(() => {
        const handleClickOutside = (e) => {
            if(popupRef.current && popupRef.current.classList.contains('popup-active') && !popupContentRef.current.contains(e.target)){
                popupRef.current.classList.remove('popup-active');
            }
        }

        document.addEventListener('click', handleClickOutside);
    }, []);    

    return(
        <nav>
            <Link to='/' className='shop-name'>Le E-commerce</Link>
            <div className="right-nav">
                {/* placeholder image for now */}
                <input type="text" className='search' placeholder='🔍Search'/>
                <Link to='/cart'><img src="#" alt="cart" /></Link>
                <img src="#" alt="profile" onClick={handleProfileClick}/>
                <ProfilePopup popupRef={popupRef} popupContentRef={popupContentRef} handlePopupClose={handlePopupClose}/>
            </div>
        </nav>
    );
}

export default Navbar;