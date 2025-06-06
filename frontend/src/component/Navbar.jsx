import { Link } from 'react-router-dom';
import { useRef } from 'react';

import './Navbar.css'
import ProfilePopup from './ProfilePopup';


function Navbar(){

    const profileRef = useRef(null);

    const handleProfileClick = () => {

    }

    return(
        <nav>
            <Link to='/' className='shop-name'>Le E-commerce</Link>
            <div className="right-nav">
                {/* placeholder image for now */}
                <input type="text" className='search' placeholder='🔍Search'/>
                <img src="#" alt="cart" />
                <img src="#" alt="profile" onClick={handleProfileClick}/>
                <ProfilePopup profileRef={profileRef}/>
            </div>
        </nav>
    );
}

export default Navbar;