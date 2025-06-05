import './Navbar.css'

function Navbar(){
    return(
        <nav>
            <h1>Le E-commerce</h1>
            <div className="right-nav">
                <input type="text" className='search' placeholder='🔍Search'/>
                <img src="#" alt="cart" />
                <img src="#" alt="profile" />
            </div>
        </nav>
    );
}

export default Navbar;